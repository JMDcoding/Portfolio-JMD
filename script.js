/* =========================================================================
   Jean-Marc DUSSAUD - Portfolio JS Interactivity (iOS Edition)
   Manages Scroll Spy active links, Scroll Reveal, Mobile Navigation,
   Dynamic Project Modals, and simulated Form Submissions.
   ========================================================================= */

// Project Data Store (STAR Method, GitHub Repository, & Attachments)
const projectsData = {
  p1: {
    title: "Refonte & Sécurisation d'Infrastructure",
    tag: "Infrastructure & Sécurité",
    techs: ["Proxmox VE", "Ansible", "Wazuh SIEM", "PfSense", "VLANs", "VPN IPsec"],
    github: "https://github.com/JMDcoding/Manipulation_PFSENSE",
    situation: "L'entreprise disposait d'un réseau plat sans cloisonnement de sécurité. Les serveurs de base de données sensibles et les postes clients se trouvaient sur le même segment. De plus, aucune centralisation de logs ni supervision n'existait, empêchant toute visibilité sur les incidents.",
    task: "Moderniser l'architecture matérielle, isoler les flux d'administration des flux serveurs et collaborateurs par segmentation virtuelle, et déployer un système de détection d'intrusions (SIEM) robuste sans perturber l'activité.",
    actions: [
      "Déploiement d'un cluster d'hyperviseurs Proxmox VE sécurisés avec routage inter-VLAN.",
      "Segmentation physique et virtuelle via pfSense : VLAN 10 (Admin), VLAN 20 (Servers), VLAN 30 (Ansible/Wazuh).",
      "Écriture de playbooks Ansible pour déployer automatiquement les agents Wazuh et durcir les OS Debian.",
      "Mise en place d'un tunnel VPN IPsec pour sécuriser l'accès distant des collaborateurs.",
      "Centralisation des logs système et réseaux vers Wazuh SIEM avec règles de corrélation avancées."
    ],
    results: [
      "Temps de restauration (RTO) réduit de 75% grâce au clustering et sauvegardes programmées.",
      "Baisse de 40% des incidents de sécurité suite à l'application des règles d'isolation Strict Deny.",
      "Centralisation et audit à 100% des accès aux serveurs de production."
    ],
    docs: [
      { name: "Topologie Réseau (Schéma PDF)", type: "schema" },
      { name: "Playbooks de durcissement Ansible (.yml)", type: "code" }
    ],
    photos: [
      { caption: "Schéma d'architecture VLAN", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  p2: {
    title: "SERENITY — IA Santé Mentale & RGPD",
    tag: "Sécurité & RGPD",
    techs: ["Node.js", "SQL Server", "Anonymisation", "RGPD Compliance", "Websockets"],
    github: "https://github.com/JMDcoding/S%C3%A9r%C3%A9nit%C3%A9",
    situation: "L'application SERENITY traite des données médicales et de santé mentale hautement confidentielles. Ces données cliniques sensibles doivent être exploitées par des modèles d'intelligence artificielle tout en respectant scrupuleusement le RGPD et le secret médical.",
    task: "Concevoir une architecture applicative garantissant la confidentialité des échanges cliniques, l'anonymisation irréversible des dossiers patients envoyés aux modèles IA et le chiffrement au repos des bases de données.",
    actions: [
      "Mise en œuvre d'un pipeline Node.js intermédiaire réalisant la pseudonymisation des données d'identité.",
      "Développement de règles d'anonymisation par hashing cryptographique irréversible.",
      "Chiffrement des connexions en temps réel via des tunnels Websockets sécurisés.",
      "Configuration de bases de données SQL Server avec chiffrement transparent des données (TDE).",
      "Création de registres de consentement utilisateur et processus de purge automatique."
    ],
    results: [
      "Conformité RGPD validée à 100% dès la phase d'audit pré-production.",
      "Anonymisation irréversible des données cliniques garantie avant envoi à l'API IA.",
      "Zéro incident d'exposition ou de fuite de données personnelles pendant la phase pilote."
    ],
    docs: [
      { name: "Analyse d'Impact relative à la Protection des Données (AIPD)", type: "pdf" }
    ],
    photos: [
      { caption: "Pipeline de chiffrement applicatif", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  p3: {
    title: "Honeypot SSH, Grafana & Loki",
    tag: "Supervision & Cyber",
    techs: ["Honeypot Cowrie", "Grafana", "Loki", "Docker Compose", "Python Scripting"],
    github: "https://github.com/JMDcoding/Honeypot-",
    situation: "L'organisation manquait cruellement de visibilité sur les attaques externes ciblant ses serveurs exposés sur Internet, rendant impossible la mise en place de politiques de bannissement proactives ou de veille sur les menaces.",
    task: "Déployer un environnement de simulation d'attaque (Honeypot) isolé sur le port SSH, récupérer les tentatives d'intrusion et les analyser visuellement sur un dashboard en temps réel.",
    actions: [
      "Création d'un conteneur Docker isolé faisant tourner le honeypot SSH Cowrie.",
      "Configuration du honeypot pour simuler un système d'exploitation Debian standard.",
      "Redirection du port 22 externe public vers le honeypot via NAT pfSense.",
      "Déploiement d'un agent de collecte Loki chargé d'expédier les fichiers de logs JSON.",
      "Création d'un tableau de bord de supervision Grafana pour géolocaliser les IPs et lister les mots de passe essayés."
    ],
    results: [
      "Capture et analyse de plus de 10 000 tentatives de connexion malveillantes par semaine.",
      "Bannissement automatique des IPs d'attaque répétée via un script Python connecté au Firewall.",
      "Identification des dictionnaires de mots de passe les plus utilisés par les botnets en direct."
    ],
    docs: [
      { name: "Documentation d'installation Docker Compose", type: "code" },
      { name: "Rapport mensuel d'audit des menaces SSH", type: "pdf" }
    ],
    photos: [
      { caption: "Tableau de bord Grafana", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  p4: {
    title: "Surveillance IoT & Dashboard",
    tag: "IoT & Réseaux",
    techs: ["Python", "Supervision", "Websockets", "Micro-contrôleurs", "Networking"],
    github: "https://github.com/JMDcoding/Mon_tableau_de_bord_IoT",
    situation: "La supervision d'équipements matériels IoT distribués exigeait une agrégation de métriques rapide (températures, connectivité, ping) pour anticiper les pannes sur site.",
    task: "Développer un serveur de supervision léger capable d'interroger périodiquement les micro-contrôleurs connectés et d'afficher leur statut opérationnel sur un écran de contrôle centralisé.",
    actions: [
      "Création d'un script d'écoute socket en Python pour centraliser les rapports d'état des cartes IoT.",
      "Mise en œuvre d'un protocole d'échange Websocket asynchrone pour la transmission instantanée.",
      "Développement d'un dashboard de supervision avec courbes de température et indicateurs ping.",
      "Mise en place de règles d'alerte SMTP (emails) en cas d'absence de ping supérieure à 30 secondes."
    ],
    results: [
      "Temps de détection de déconnexion descendu sous la barre des 2 secondes.",
      "Réduction de 30% des interruptions d'équipements grâce aux alertes mail de prévention.",
      "Supervision stable supportant plus de 50 modules IoT connectés simultanément."
    ],
    docs: [
      { name: "Schéma d'intégration et d'adressage IP des modules", type: "schema" }
    ],
    photos: [
      { caption: "Dashboard de contrôle IoT", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  p5: {
    title: "Scanner Réseau sous Kali Linux",
    tag: "Audit & Bash",
    techs: ["Kali Linux", "Nmap", "Bash scripting", "Vulnerability auditing"],
    github: "https://github.com/JMDcoding/Scanner-Kali-linux",
    situation: "La détection manuelle d'équipements non-autorisés ou de ports ouverts vulnérables sur l'infrastructure d'entreprise prenait trop de temps et souffrait d'erreurs humaines fréquentes.",
    task: "Automatiser l'audit régulier du réseau interne en scannant la topologie, en listant les ports et en alertant l'administrateur en cas de changement par rapport à la base saine.",
    actions: [
      "Écriture d'un script Bash englobant des requêtes Nmap ciblées sur les sous-réseaux IP.",
      "Mise en place de filtres Regex pour extraire les services et versions exposées.",
      "Sauvegarde des scans sous forme d'historique xml pour comparer les états réseau.",
      "Automatisation du lancement du script par tâche planifiée Cron sous Kali Linux."
    ],
    results: [
      "Détection instantanée sous 1 heure de tout nouvel hôte suspect connecté au LAN.",
      "Identification proactive de 4 services obsolètes vulnérables corrigés avant exploitation.",
      "Rapport automatisé généré quotidiennement pour l'équipe de sécurité informatique."
    ],
    docs: [
      { name: "Code source du script de scan Bash", type: "code" }
    ],
    photos: [
      { caption: "Aperçu du script de scan Nmap", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  p6: {
    title: "Analyseur de Logs Python",
    tag: "Développement & Script",
    techs: ["Python", "Regex", "Logs Auditing", "Automation", "Security Alerts"],
    github: "https://github.com/JMDcoding/Analyse%20de%20Logs",
    situation: "Les fichiers de logs Apache et serveurs d'accès généraient des gigaoctets de données inexploitées, dissimulant des tentatives récurrentes de force brute ou d'injections de requêtes suspectes.",
    task: "Créer un script Python capable de lire en flux continu les fichiers logs, d'identifier les signatures de requêtes hostiles et de synthétiser les données importantes sous forme de rapports légers.",
    actions: [
      "Développement d'un parser de fichiers logs asynchrone utilisant la bibliothèque standard de Python.",
      "Modélisation de motifs Regex complexes pour capturer les requêtes malveillantes (ex: SQL injections, scripts d'admin).",
      "Agrégation des statistiques par adresses IP d'origine et par types de navigateurs utilisés.",
      "Exportation des alertes prioritaires directement vers le syslog local."
    ],
    results: [
      "Capacité d'analyse de fichiers de plus de 500 000 lignes en moins de 10 secondes.",
      "Détection automatisée et filtrage de plus de 95% des scanners de ports web automatisés.",
      "Rapports HTML synthétiques clairs envoyés chaque soir aux administrateurs."
    ],
    docs: [
      { name: "Documentation d'utilisation du script Python", type: "pdf" }
    ],
    photos: [
      { caption: "Capture du script d'analyse Regex", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize icons
  lucide.createIcons();

  /* =========================================================================
     1. SCROLL REVEAL EFFECT
     ========================================================================= */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  /* =========================================================================
     2. MOBILE MENU TOGGLE
     ========================================================================= */
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuPanel = document.getElementById('mobile-menu-panel');
  const menuLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && menuPanel) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      menuPanel.classList.toggle('hidden');
      
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isExpanded ? 'menu' : 'x');
        lucide.createIcons();
      }
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuPanel.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }

  /* =========================================================================
     3. SCROLL SPY ACTIVE LINK STATE
     ========================================================================= */
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  function scrollSpy() {
    let currentSectionId = 'home';
    const scrollPosition = window.scrollY + 100; // Offset for sticky nav

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);
  scrollSpy(); // Initial call

  /* =========================================================================
     4. CONTACT FORM VALIDATION & SIMULATION
     ========================================================================= */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const oldBtnHTML = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Transmission...`;
      lucide.createIcons();
      
      // Simulate form post
      setTimeout(() => {
        formStatus.classList.remove('hidden', 'border-red-500/20', 'bg-red-500/5', 'text-red-400');
        formStatus.classList.add('border-ios-emerald/20', 'bg-ios-emerald/5', 'text-ios-emerald');
        formStatus.innerHTML = `<strong>Message envoyé avec succès !</strong> Votre demande a été reçue. Jean-Marc DUSSAUD vous recontactera dans les plus brefs délais.`;
        
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = oldBtnHTML;
        lucide.createIcons();

        // Auto hide banner after 6 seconds
        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 6000);
      }, 1500);
    });
  }
});

/* =========================================================================
   5. DYNAMIC PROJECT DETAIL MODAL (iOS Style)
   ========================================================================= */
function openProjectModal(projectId) {
  const modal = document.getElementById('project-detail-modal');
  const headerEl = document.getElementById('project-modal-header');
  const bodyEl = document.getElementById('project-modal-body');
  const footerEl = document.getElementById('project-modal-footer');
  
  if (!modal || !headerEl || !bodyEl || !footerEl || !projectsData[projectId]) return;

  const project = projectsData[projectId];

  // 1. Inject Header
  headerEl.innerHTML = `
    <div class="flex items-center gap-2 mb-2">
      <span class="text-[9px] font-mono tracking-widest text-ios-blue bg-ios-blue/10 border border-ios-blue/15 px-2.5 py-0.5 rounded font-bold uppercase">${project.tag}</span>
    </div>
    <h3 class="font-space font-bold text-xl text-white">${project.title}</h3>
  `;

  // 2. Inject Badges & STAR details in the scroll body
  let techBadgesHTML = project.techs.map(t => `<span class="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[10px] font-mono text-slate-300 hover:border-ios-blue hover:text-white transition-colors">${t}</span>`).join('');
  
  let actionsListHTML = project.actions.map(a => `
    <li class="flex items-start gap-2 text-xs md:text-sm text-slate-300">
      <i data-lucide="check" class="w-4 h-4 text-ios-blue flex-shrink-0 mt-0.5"></i>
      <span>${a}</span>
    </li>
  `).join('');

  let resultsListHTML = project.results.map(r => `
    <li class="flex items-start gap-2 text-xs md:text-sm text-slate-200">
      <i data-lucide="trending-up" class="w-4 h-4 text-ios-emerald flex-shrink-0 mt-0.5"></i>
      <span>${r}</span>
    </li>
  `).join('');

  let docsListHTML = project.docs.map(d => `
    <div class="flex items-center justify-between p-3.5 bg-slate-950/50 border border-white/5 rounded-xl hover:border-ios-blue/30 transition-colors group">
      <div class="flex items-center gap-2.5">
        <i data-lucide="${d.type === 'schema' ? 'network' : d.type === 'code' ? 'terminal' : 'file-text'}" class="w-4.5 h-4.5 text-ios-blue"></i>
        <span class="text-xs font-mono text-slate-300 group-hover:text-white">${d.name}</span>
      </div>
      <button onclick="alert('Téléchargement simulé de : ${d.name}')" class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-ios-blue flex items-center gap-1">
        <i data-lucide="download" class="w-3.5 h-3.5"></i> Ouvrir
      </button>
    </div>
  `).join('');

  let photosListHTML = project.photos.map(p => `
    <div class="flex flex-col gap-2 bg-slate-950/40 border border-white/5 rounded-xl p-3">
      <img src="${p.url}" alt="${p.caption}" class="w-full h-auto rounded-lg border border-white/5 filter brightness-95" />
      <span class="text-[10px] font-mono text-slate-500 text-center">${p.caption}</span>
    </div>
  `).join('');

  bodyEl.innerHTML = `
    <!-- Tech Stack -->
    <div class="flex flex-wrap gap-1.5 border-b border-white/5 pb-4">
      ${techBadgesHTML}
    </div>

    <!-- STAR - Situation -->
    <div class="flex flex-col gap-2">
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-ios-blue">1. Situation &amp; Contexte</h4>
      <p class="text-slate-300 text-xs md:text-sm leading-relaxed">${project.situation}</p>
    </div>

    <!-- STAR - Tâche -->
    <div class="flex flex-col gap-2">
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-ios-blue">2. Tâche &amp; Objectif</h4>
      <p class="text-slate-300 text-xs md:text-sm leading-relaxed">${project.task}</p>
    </div>

    <!-- STAR - Actions -->
    <div class="flex flex-col gap-2.5">
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-ios-blue">3. Actions Techniques Déployées</h4>
      <ul class="flex flex-col gap-2.5 pl-1">
        ${actionsListHTML}
      </ul>
    </div>

    <!-- STAR - Résultats (Highlight block) -->
    <div class="bg-ios-emerald/5 border border-ios-emerald/20 p-4 rounded-xl flex flex-col gap-2.5 shadow-[0_0_15px_rgba(52,199,89,0.02)]">
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-ios-emerald">4. Résultats &amp; Impact (Métriques)</h4>
      <ul class="flex flex-col gap-2 pl-1">
        ${resultsListHTML}
      </ul>
    </div>

    <!-- Documents joints -->
    <div class="flex flex-col gap-3">
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Documents techniques joints</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${docsListHTML}
      </div>
    </div>

    <!-- Galerie de photos / schémas -->
    <div class="flex flex-col gap-3">
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Illustrations d'architecture</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${photosListHTML}
      </div>
    </div>
  `;

  // 3. Inject Footer Buttons
  footerEl.innerHTML = `
    <a href="${project.github}" target="_blank" rel="noreferrer" class="px-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/60 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-ios-blue hover:bg-slate-900 transition-colors shadow-sm">
      <i data-lucide="github" class="w-4 h-4"></i>
      Consulter sur GitHub
    </a>
    <button onclick="closeProjectModalDirect()" class="px-4 py-2.5 rounded-xl bg-slate-950 border border-white/5 text-slate-300 hover:text-white hover:border-white/10 text-xs font-bold uppercase transition-colors">
      Fermer la vue
    </button>
  `;

  // Initialize new icons in injected DOM
  lucide.createIcons();

  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('modal-active');
  document.body.classList.add('overflow-hidden');
}

function closeProjectModalDirect() {
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('modal-active');
  document.body.classList.remove('overflow-hidden');
}
