import re

with open('d:/portfolio/inside/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update certifications with logos and fortinet link
replacements = [
    (
        r'<a href="assets/certifications/cisco_ccna\.pdf" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">\s*Cisco CCNA <i data-lucide="external-link" class="w-3 h-3"></i>\s*</a>',
        r'<a href="assets/certifications/cisco_ccna.pdf" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1.5">\n                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cisco.svg" class="w-4 h-4 invert opacity-80" alt="Cisco" />\n                        Cisco CCNA <i data-lucide="external-link" class="w-3 h-3"></i>\n                      </a>'
    ),
    (
        r'<a href="assets/certifications/fortinet_nse4\.pdf" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">\s*Fortinet NSE 4 <i data-lucide="external-link" class="w-3 h-3"></i>\s*</a>',
        r'<a href="assets/certifications/fortinet_nse4.pdf" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1.5">\n                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fortinet.svg" class="w-4 h-4 invert opacity-80" alt="Fortinet" />\n                        Fortinet NSE 4 <i data-lucide="external-link" class="w-3 h-3"></i>\n                      </a>'
    ),
    (
        r'<a href="https://www\.lpi\.org/our-certifications/lpic-1-overview" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">\s*LPIC-1 Linux Admin <i data-lucide="external-link" class="w-3 h-3"></i>\s*</a>',
        r'<a href="https://www.lpi.org/our-certifications/lpic-1-overview" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1.5">\n                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg" class="w-4 h-4 invert opacity-80" alt="Linux" />\n                        LPIC-1 Linux Admin <i data-lucide="external-link" class="w-3 h-3"></i>\n                      </a>'
    ),
    (
        r'<a href="https://training\.fortinet\.com/local/b2c/prog_cert\.php\?code=NSE5" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">\s*Fortinet NSE 5 <i data-lucide="external-link" class="w-3 h-3"></i>\s*</a>',
        r'<a href="https://www.fortinet.com/training-certification" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1.5">\n                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fortinet.svg" class="w-4 h-4 invert opacity-80" alt="Fortinet" />\n                        Fortinet NSE 5 <i data-lucide="external-link" class="w-3 h-3"></i>\n                      </a>'
    ),
    (
        r'<a href="https://www\.cisco\.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise\.html" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">\s*Cisco CCNP Enterprise <i data-lucide="external-link" class="w-3 h-3"></i>\s*</a>',
        r'<a href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1.5">\n                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cisco.svg" class="w-4 h-4 invert opacity-80" alt="Cisco" />\n                        Cisco CCNP Enterprise <i data-lucide="external-link" class="w-3 h-3"></i>\n                      </a>'
    ),
    (
        r'<a href="https://www\.isc2\.org/Certifications/CISSP" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">\s*CISSP <i data-lucide="external-link" class="w-3 h-3"></i>\s*</a>',
        r'<a href="https://www.isc2.org/Certifications/CISSP" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1.5">\n                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/isc2.svg" class="w-4 h-4 invert opacity-80" alt="ISC2" />\n                        CISSP <i data-lucide="external-link" class="w-3 h-3"></i>\n                      </a>'
    ),
    # Remove dates from experiences
    (
        r'<div class="mt-2 md:mt-0 text-xs font-mono border border-white/15 px-3 py-1 rounded-lg text-slate-300 card-dark inline-block self-start">\s*Juillet 2026 - Septembre 2026\s*</div>',
        ''
    ),
    (
        r'<div class="mt-2 md:mt-0 text-xs font-mono border border-white/15 px-3 py-1 rounded-lg text-slate-300 card-dark inline-block self-start">\s*Mai 2026 - Juin 2026\s*</div>',
        ''
    ),
    (
        r'<div class="mt-2 md:mt-0 text-xs font-mono border border-white/15 px-3 py-1 rounded-lg text-slate-300 card-dark inline-block self-start">\s*Février 2026 - Juin 2026\s*</div>',
        ''
    )
]

for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content, count=1)

with open('d:/portfolio/inside/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
