import sys

def replace_file():
    with open('d:/portfolio/inside/index.html', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    start_index = 336
    end_index = 703

    with open('d:/portfolio/inside/replace_text.txt', 'r', encoding='utf-8') as f:
        replacement = f.read()

    new_lines = lines[:start_index] + [replacement] + lines[end_index:]
    with open('d:/portfolio/inside/index.html', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print('Done.')

if __name__ == '__main__':
    replace_file()
