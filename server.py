import os
import sys
import mimetypes
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

PORT = 8085

class RemasteredHTTPRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Range, Content-Type, Accept')
        self.send_header('Access-Control-Expose-Headers', 'Content-Range, Content-Length, Accept-Ranges')
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "OK")
        self.end_headers()

    def guess_type(self, path):
        ctype = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        if path.endswith('.css'):
            return 'text/css; charset=utf-8'
        if path.endswith('.html'):
            return 'text/html; charset=utf-8'
        if path.endswith('.mp3'):
            return 'audio/mpeg'
        if path.endswith('.png'):
            return 'image/png'
        if path.endswith('.jpg') or path.endswith('.jpeg'):
            return 'image/jpeg'
        return ctype

    # Support HTTP Range requests (crucial for iOS Safari / Telegram Mini App audio streaming)
    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        fs = os.fstat(f.fileno())
        file_len = fs.st_size
        range_header = self.headers.get('Range')

        if range_header:
            try:
                range_match = range_header.strip().replace('bytes=', '')
                parts = range_match.split('-')
                start = int(parts[0]) if parts[0] else 0
                end = int(parts[1]) if parts[1] else file_len - 1
                if start >= file_len:
                    self.send_error(416, "Requested Range Not Satisfiable")
                    f.close()
                    return None
                end = min(end, file_len - 1)
                length = end - start + 1

                self.send_response(206, "Partial Content")
                self.send_header("Content-Type", ctype)
                self.send_header("Content-Range", f"bytes {start}-{end}/{file_len}")
                self.send_header("Content-Length", str(length))
                self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
                self.end_headers()
                f.seek(start)
                self._range_length = length
                return f
            except Exception:
                f.seek(0)

        self._range_length = None
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(file_len))
        self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
        self.end_headers()
        return f

    def copyfile(self, source, outputfile):
        try:
            if getattr(self, '_range_length', None) is not None:
                bytes_to_send = self._range_length
                bufsize = 64 * 1024
                while bytes_to_send > 0:
                    read_amount = min(bytes_to_send, bufsize)
                    chunk = source.read(read_amount)
                    if not chunk:
                        break
                    outputfile.write(chunk)
                    bytes_to_send -= len(chunk)
            else:
                super().copyfile(source, outputfile)
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError, OSError):
            pass

class SilentThreadingHTTPServer(ThreadingHTTPServer):
    def handle_error(self, request, client_address):
        exc_type, exc_val, _ = sys.exc_info()
        if exc_type in (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            return
        super().handle_error(request, client_address)

def run_server(port=PORT):
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    SilentThreadingHTTPServer.allow_reuse_address = True

    for p in range(port, port + 10):
        try:
            httpd = SilentThreadingHTTPServer(("", p), RemasteredHTTPRequestHandler)
            print("=" * 64)
            print("  [THE BOYS REMASTERED] - SERVER STARTED")
            print(f"  Local URL: http://localhost:{p}")
            print(f"  For Telegram Mini App use HTTPS via cloudflared")
            print("=" * 64)
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\nСервер остановлен пользователем.")
            break
        except OSError as e:
            if e.errno == 10048 or "Address already in use" in str(e):
                continue
            else:
                raise e

if __name__ == '__main__':
    run_server()
