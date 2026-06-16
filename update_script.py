import re

with open('d:/portfolio/inside/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Rename p4
content = re.sub(
    r'title:\s*"Projet d\'Étude 2ème Année"',
    r'title: "ParcelIA"',
    content
)

# Update p1 website
content = re.sub(
    r'(p1:\s*\{[^}]*?website:\s*)""',
    r'\1"https://site-web-conseil-financier-78gddzdju.vercel.app/"',
    content,
    count=1
)

# Update p12 website
content = re.sub(
    r'(p12:\s*\{[^}]*?website:\s*)""',
    r'\1"https://coop-rative-orient.vercel.app/#farms"',
    content,
    count=1
)

# Modify renderProjects logic
old_card_html = r'''      card\.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <span class="text-\[10px\] font-mono border border-white/15 text-slate-300 px-2\.5 py-1 rounded-lg font-bold uppercase card-dark flex items-center">
              \$\{p\.tag\}
            </span>
            <i data-lucide="arrow-up-right" class="w-4 h-4 text-slate-400 group-hover:text-white transition-colors"></i>
          </div>
          <h3 class="font-space font-bold text-base text-white mb-2 flex items-center">\$\{p\.title\} \$\{hasGreenDot\}</h3>
          <p class="text-slate-300 text-xs leading-relaxed line-clamp-2">\$\{p\.description\}</p>
        </div>
        <div class="flex flex-wrap gap-1\.5 mt-4 relative z-10">
          \$\{techHTML\}
        </div>
      `;'''

new_card_html = r'''      const hasWebBtn = (greenDotProjectsIds.includes(id) && p.website) 
        ? `<a href="${p.website}" target="_blank" onclick="event.stopPropagation()" class="mt-2 px-3 py-1.5 rounded-lg border border-white/15 text-white text-[10px] uppercase font-bold tracking-wider hover:bg-white/10 transition-colors inline-flex items-center gap-1.5 w-max bg-black/40"><i data-lucide="globe" class="w-3.5 h-3.5"></i> Version Web</a>` 
        : '';
        
      card.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono border border-white/15 text-slate-300 px-2.5 py-1 rounded-lg font-bold uppercase card-dark flex items-center">
              ${p.tag}
            </span>
            <i data-lucide="arrow-up-right" class="w-4 h-4 text-slate-400 group-hover:text-white transition-colors"></i>
          </div>
          <h3 class="font-space font-bold text-base text-white mb-2 flex items-center">${p.title} ${hasGreenDot}</h3>
          <p class="text-slate-300 text-xs leading-relaxed line-clamp-2">${p.description}</p>
        </div>
        <div class="flex flex-col gap-2 mt-4 relative z-10">
          <div class="flex flex-wrap gap-1.5">
            ${techHTML}
          </div>
          ${hasWebBtn}
        </div>
      `;'''

content = re.sub(old_card_html, new_card_html, content)

with open('d:/portfolio/inside/script.js', 'w', encoding='utf-8') as f:
    f.write(content)
