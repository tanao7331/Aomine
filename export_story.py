# -*- coding: utf-8 -*-
import json
import build_full_440_novel

def export():
    story = build_full_440_novel.build_story()
    json_str = json.dumps(story, ensure_ascii=False, indent=2)

    header = """/* ==========================================================================
   THE BOYS: REMASTERED - ANIME EDITION (429 SCENES MASTER SCRIPT)
   Full 18 Chapters + Prologue + Epilogue + 3 Endings
   ========================================================================== */

"""
    footer = """

if (typeof window !== 'undefined') {
  window.STORY_DATA = STORY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORY_DATA;
}
"""

    full_content = header + "const STORY_DATA = " + json_str + ";" + footer

    with open('js/story.js', 'w', encoding='utf-8') as f:
        f.write(full_content)

    print(f"Exported {len(story)} scenes to js/story.js ({len(full_content)} bytes)")

if __name__ == '__main__':
    export()
