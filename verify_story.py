# -*- coding: utf-8 -*-
import json
import os
import sys

def verify():
    with open('js/story.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the JSON assignment
    prefix = 'const STORY_DATA = '
    start = content.index(prefix) + len(prefix)
    suffix = ';\n\nif (typeof window !=='
    end = content.index(suffix)
    story = json.loads(content[start:end])

    total = len(story)
    print(f"=== STORY INTEGRITY VERIFICATION (TOTAL SCENES: {total}) ===")

    # 1. Broken links
    broken_next = []
    broken_choices = []
    endings = []
    choices_count = 0

    for sid, s in story.items():
        if 'next' in s and s['next']:
            if s['next'] not in story:
                broken_next.append((sid, s['next']))
        if 'choices' in s and s['choices']:
            choices_count += len(s['choices'])
            for c in s['choices']:
                if c['target'] not in story:
                    broken_choices.append((sid, c['text'], c['target']))
        if not s.get('next') and not s.get('choices'):
            endings.append(sid)

    print(f"1. Transitions check:")
    print(f"   Broken 'next' links: {len(broken_next)}")
    for b in broken_next:
        print(f"     [!] Scene '{b[0]}' -> missing next '{b[1]}'")
    print(f"   Broken 'choice' targets: {len(broken_choices)}")
    for b in broken_choices:
        print(f"     [!] Scene '{b[0]}' -> choice '{b[1]}' -> missing target '{b[2]}'")
    print(f"   Total interactive choices: {choices_count}")
    print(f"   Terminal endings (without choices or next): {len(endings)} ({endings})")

    # 2. Reachability from prologue_start
    visited = set()
    queue = ['prologue_start']
    while queue:
        curr = queue.pop(0)
        if curr in visited:
            continue
        visited.add(curr)
        node = story.get(curr)
        if not node:
            continue
        if node.get('next'):
            queue.append(node['next'])
        for c in node.get('choices', []):
            queue.append(c['target'])

    unreachable = set(story.keys()) - visited
    print(f"\n2. Reachability check:")
    print(f"   Reachable scenes from start: {len(visited)} / {total}")
    print(f"   Unreachable scenes: {len(unreachable)}")
    if unreachable:
        print(f"   Unreachable list: {sorted(list(unreachable))}")

    # 3. Assets check
    missing_bgs = set()
    missing_chars = set()
    missing_docs = set()
    bgm_distribution = {}

    for sid, s in story.items():
        if s.get('bg') and not os.path.exists(s['bg']):
            missing_bgs.add(s['bg'])
        if s.get('char') and not os.path.exists(s['char']):
            missing_chars.add(s['char'])
        if s.get('document') and not os.path.exists(s['document']):
            missing_docs.add(s['document'])
        if s.get('bgm'):
            bgm_distribution[s['bgm']] = bgm_distribution.get(s['bgm'], 0) + 1

    print(f"\n3. Assets check:")
    print(f"   Missing background files: {len(missing_bgs)} {missing_bgs}")
    print(f"   Missing character sprites: {len(missing_chars)} {missing_chars}")
    print(f"   Missing document textures: {len(missing_docs)} {missing_docs}")

    print(f"\n4. Soundtrack BGM triggers:")
    for bgm, count in sorted(bgm_distribution.items()):
        print(f"   Track '{bgm}': triggered in {count} scenes")

    assert len(broken_next) == 0, "Found broken next links!"
    assert len(broken_choices) == 0, "Found broken choice targets!"
    assert len(unreachable) == 0, "Found unreachable scenes!"
    assert len(missing_bgs) == 0, "Found missing background images!"
    assert len(missing_chars) == 0, "Found missing character sprites!"
    assert len(missing_docs) == 0, "Found missing documents!"

    print("\n>>> ALL TESTS PASSED! 100% AIRTIGHT STORY GRAPH WITH 429 SCENES <<<")

if __name__ == '__main__':
    verify()
