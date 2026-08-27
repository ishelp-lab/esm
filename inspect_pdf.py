import pymupdf, sys

with open('pdf_spans.txt', 'w', encoding='utf-8') as out:
    doc = pymupdf.open('Catálogo ESM Blocos e Pisos.pdf')
    for i in range(len(doc)):
        page = doc[i]
        out.write(f'=== PAGE {i+1} ===\n')
        d = page.get_text('dict')
        for b in d.get('blocks', []):
            if 'lines' in b:
                for l in b['lines']:
                    for s in l['spans']:
                        t = s['text'].strip()
                        if t:
                            c = s['color']
                            hex_c = f'#{c:06x}'
                            out.write(f"  [{hex_c}] size={s['size']:.1f} font={s['font']} -> '{t}'\n")

print('Done writing pdf_spans.txt')
