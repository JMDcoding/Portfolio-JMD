import sys

def append_logic():
    with open('d:/portfolio/inside/script.js', 'a', encoding='utf-8') as f:
        f.write('''
/* =========================================================================
   6. DYNAMIC PROJECT GRID WITH PAGINATION & FILTERING
   ========================================================================= */

let currentFilter = 'all';
let currentSearch = '';
let currentPage = 1;
const ITEMS_PER_PAGE = 9;

// List of projects requiring the "green dot" for Cyber/Network skills
const greenDotProjectsIds = ['p1', 'p4', 'p2', 'p6', 'p20', 'p13', 'p14', 'p8', 'p12', 'p7', 'p18'];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const pageIndicator = document.getElementById('page-indicator');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  
  if (!grid || !pageIndicator || !prevBtn || !nextBtn) return;

  // Filter projects
  const filtered = Object.keys(projectsData).filter(id => {
    const p = projectsData[id];
    
    // Check search
    const matchesSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          p.techs.some(t => t.toLowerCase().includes(currentSearch.toLowerCase()));
                          
    // Check filter category
    let matchesCategory = false;
    if (currentFilter === 'all') {
      matchesCategory = true;
    } else {
      const lowerFilter = currentFilter.toLowerCase();
      matchesCategory = p.tag.toLowerCase().includes(lowerFilter);
      // Extra mapping to match 'IA' or 'Cyber' keywords in tag
      if (!matchesCategory && lowerFilter === 'ia' && (p.tag.toLowerCase().includes('data') || p.tag.toLowerCase().includes('ia'))) {
        matchesCategory = true;
      }
      if (!matchesCategory && lowerFilter === 'cyber' && (p.tag.toLowerCase().includes('séc') || p.tag.toLowerCase().includes('cyber') || p.tag.toLowerCase().includes('rgpd'))) {
        matchesCategory = true;
      }
      if (!matchesCategory && lowerFilter === 'réseau' && (p.tag.toLowerCase().includes('réseau') || p.tag.toLowerCase().includes('infrastructure'))) {
        matchesCategory = true;
      }
      if (!matchesCategory && lowerFilter === 'développement' && (p.tag.toLowerCase().includes('développement') || p.tag.toLowerCase().includes('dev') || p.tag.toLowerCase().includes('web') || p.tag.toLowerCase().includes('jeu') || p.tag.toLowerCase().includes('programmation'))) {
        matchesCategory = true;
      }
    }
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Render HTML
  grid.innerHTML = '';
  if (paginated.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-mono text-sm">Aucun projet ne correspond à votre recherche.</div>`;
  } else {
    paginated.forEach(id => {
      const p = projectsData[id];
      const hasGreenDot = greenDotProjectsIds.includes(id) ? `<span class="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] ml-2" title="Compétence Réseau/Cyber/Système"></span>` : '';
      
      const card = document.createElement('div');
      card.onclick = () => openProjectModal(id);
      card.className = "card-dark card-dark-hover rounded-2xl p-5 shadow-xl cursor-pointer flex flex-col justify-between group min-h-[160px] transition-all duration-300 relative overflow-hidden";
      
      let techHTML = p.techs.slice(0, 3).map(t => `<span class="text-[10px] font-mono border border-white/10 px-2 py-1 rounded-lg text-slate-400 card-dark">${t}</span>`).join('');
      
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
        <div class="flex flex-wrap gap-1.5 mt-4 relative z-10">
          ${techHTML}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Update Pagination Controls
  pageIndicator.innerText = `Page ${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  
  // Re-init icons
  lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  // Setup Search
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      currentPage = 1;
      renderProjects();
    });
  }

  // Setup Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active', 'text-white', 'bg-white/15', 'shadow-sm'));
      filterBtns.forEach(b => b.classList.add('text-slate-400'));
      
      // Add active to clicked
      const target = e.currentTarget;
      target.classList.add('active', 'text-white', 'bg-white/15', 'shadow-sm');
      target.classList.remove('text-slate-400');

      currentFilter = target.getAttribute('data-filter');
      currentPage = 1;
      renderProjects();
    });
  });

  // Setup Pagination Buttons
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderProjects();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // (Render will cap currentPage at totalPages)
      currentPage++;
      renderProjects();
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Initial render
  setTimeout(renderProjects, 100);
});
''')

if __name__ == '__main__':
    append_logic()
