# -*- coding: utf-8 -*-
import urllib.request
import urllib.error
import threading
import time
import socket
import os
import sys

# Test server in separate thread
import server

def run_server():
    server.ThreadingHTTPServer.allow_reuse_address = True
    httpd = server.ThreadingHTTPServer(('127.0.0.1', 8085), server.RemasteredHTTPRequestHandler)
    httpd.serve_forever()

def test():
    # Start server in background thread if not already running
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    is_open = sock.connect_ex(('127.0.0.1', 8085)) == 0
    sock.close()

    if not is_open:
        t = threading.Thread(target=run_server, daemon=True)
        t.start()
        time.sleep(1.0)

    base = 'http://127.0.0.1:8085/'

    test_urls = [
        ('index.html', 200, 'text/html'),
        ('css/style.css', 200, 'text/css'),
        ('js/story.js', 200, 'application/javascript'),
        ('js/audio.js', 200, 'application/javascript'),
        ('js/phone_system.js', 200, 'application/javascript'),
        ('js/minigames.js', 200, 'application/javascript'),
        ('js/engine.js', 200, 'application/javascript'),
        ('assets/backgrounds/title_screen_anime.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_school_sunset.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_school_roof.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_garages_night.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_moscow_city.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_vip_casino.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_train_station.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_sizo_cell.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_vanya_office.jpg', 200, 'image/jpeg'),
        ('assets/backgrounds/bg_anime_battlefield.jpg', 200, 'image/jpeg'),
        ('assets/characters/anime_vanya_clean.png', 200, 'image/png'),
        ('assets/characters/anime_nikita_clean.png', 200, 'image/png'),
        ('assets/characters/anime_aslan_clean.png', 200, 'image/png'),
        ('assets/characters/anime_ismail_clean.png', 200, 'image/png'),
        ('assets/backgrounds/document_nikita_228.png', 200, 'image/png'),
        ('assets/backgrounds/document_aslan_city.png', 200, 'image/png'),
        ('assets/backgrounds/document_ismail_282.png', 200, 'image/png'),
        ('assets/backgrounds/document_vanya_tokmachka.png', 200, 'image/png'),
        ('assets/audio/anime_track1_intro.mp3', 200, 'audio/mpeg'),
        ('assets/audio/anime_track2_action.mp3', 200, 'audio/mpeg'),
        ('assets/audio/anime_track3_epic_ambient.mp3', 200, 'audio/mpeg'),
        ('assets/audio/anime_track4_sadness.mp3', 200, 'audio/mpeg'),
        ('assets/audio/anime_track5_tension.mp3', 200, 'audio/mpeg'),
        ('assets/audio/anime_track6_climax.mp3', 200, 'audio/mpeg')
    ]

    print("=== TESTING HTTP SERVER & ASSETS DELIVERY ===")
    failed = []
    for path, expected_code, expected_type in test_urls:
        url = base + urllib.parse.quote(path)
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req) as resp:
                code = resp.status
                ctype = resp.headers.get('Content-Type')
                clen = resp.headers.get('Content-Length')
                if code != expected_code or expected_type not in ctype:
                    failed.append((path, code, ctype))
                    print(f"[-] FAIL: {path} -> {code}, {ctype}")
                else:
                    print(f"[+] PASS: {path} (size: {clen} bytes, type: {ctype})")
        except Exception as e:
            failed.append((path, str(e)))
            print(f"[-] ERROR: {path} -> {e}")

    # Test HTTP Range request (iOS / Safari streaming requirement)
    print("\n=== TESTING HTTP RANGE REQUEST FOR AUDIO STREAMING ===")
    range_req = urllib.request.Request(base + 'assets/audio/anime_track1_intro.mp3')
    range_req.add_header('Range', 'bytes=0-1023')
    with urllib.request.urlopen(range_req) as resp:
        print(f"[+] Range status: {resp.status} (expected 206 Partial Content)")
        print(f"[+] Content-Range: {resp.headers.get('Content-Range')}")
        print(f"[+] Data length: {len(resp.read())} bytes")
        assert resp.status == 206, "Range request failed!"
        assert resp.headers.get('Content-Range') is not None, "Content-Range missing!"

    print(f"\nResults: {len(test_urls) - len(failed)} passed, {len(failed)} failed.")
    assert len(failed) == 0, f"Some tests failed: {failed}"
    print(">>> 100% ASSETS & SERVER TESTS PASSED SUCCESSFULLY! <<<")

if __name__ == '__main__':
    test()
