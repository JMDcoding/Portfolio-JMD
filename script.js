/* =========================================================================
   Jean-Marc DUSSAUD - Portfolio JS Interactivity (iOS Monochrome Edition)
   Manages Scroll Spy active links, Scroll Reveal, Mobile Navigation,
   Dynamic Project Modals, and simulated Form Submissions.
   ========================================================================= */

// Project Data Store (STAR Method, GitHub Repository, Website & Attachments)
const projectsData = {
  p1: {
    title: "Site Web Conseil Financier",
    tag: "Développement Web",
    description: "Site vitrine professionnel conçu pour un cabinet de conseil en gestion financière, présentant l'ensemble des services d'accompagnement et de stratégie patrimoniale.",
    techs: ["HTML5", "CSS3", "JavaScript", "Design Responsive"],
    github: "https://github.com/JMDcoding/Site_Web_Conseil_Financier",
    website: "https://site-web-conseil-financier-78gddzdju.vercel.app/",
    assetDir: "assets/projects/p01_site_web_conseil_financier",
    situation: "Un cabinet de conseil financier avait besoin d'une présence en ligne professionnelle pour présenter ses services et attirer de nouveaux clients.",
    task: "Concevoir et développer un site web moderne, responsive et optimisé pour la conversion.",
    actions: [
      "Conception de l'architecture du site et du parcours utilisateur.",
      "Développement front-end responsive avec HTML5, CSS3 et JavaScript.",
      "Intégration d'éléments visuels professionnels et de sections de présentation de services.",
      "Optimisation SEO et performance pour un chargement rapide."
    ],
    results: [
      "Site fonctionnel et accessible sur tous les supports (desktop, tablette, mobile).",
      "Interface professionnelle renforçant la crédibilité du cabinet.",
      "Temps de chargement optimisé sous les 2 secondes."
    ],
    docs: [],
    photos: []
  },
  p2: {
    title: "SERENITY — IA & Conformité RGPD",
    tag: "Sécurité & RGPD",
    description: "Application de santé mentale intégrant l'IA pour l'analyse des échanges cliniques, avec anonymisation irréversible des données patients et conformité RGPD totale.",
    techs: ["Node.js", "SQL Server", "Anonymisation", "RGPD Compliance", "Websockets"],
    github: "https://github.com/JMDcoding/S%C3%A9r%C3%A9nit%C3%A9",
    website: "https://serenity-snd9.vercel.app/",
    assetDir: "assets/projects/p02_serenity",
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
      "Anonymisation irréversible des données cliniques de santé mentale garantie avant transmission.",
      "Aucun incident d'exposition ou de fuite de données personnelles pendant la phase pilote."
    ],
    docs: [
      { name: "Analyse d'Impact relative à la Protection des Données (AIPD)", type: "pdf" }
    ],
    photos: []
  },
  p3: {
    title: "Mini-jeu JAVA",
    tag: "Développement & Jeu",
    description: "Jeu interactif développé en Java exploitant les concepts avancés de programmation orientée objet : héritage, polymorphisme et interfaces graphiques Swing.",
    techs: ["Java", "POO", "Swing", "Game Design"],
    github: "https://github.com/JMDcoding/Mini-jeu-JAVA",
    website: "",
    assetDir: "assets/projects/p03_mini_jeu_java",
    situation: "Projet académique visant à mettre en pratique les concepts de programmation orientée objet en Java à travers la création d'un mini-jeu interactif.",
    task: "Développer un jeu fonctionnel en Java exploitant les principes de POO : héritage, polymorphisme et encapsulation.",
    actions: [
      "Modélisation UML des classes du jeu (personnages, niveaux, interactions).",
      "Développement du moteur de jeu en Java avec interface graphique Swing.",
      "Implémentation de la logique de gameplay et des règles de scoring.",
      "Tests unitaires et débogage des mécaniques de jeu."
    ],
    results: [
      "Jeu fonctionnel validé et présenté en soutenance académique.",
      "Maîtrise des concepts POO avancés démontrée à travers l'architecture du code.",
      "Code source documenté et versionné sur GitHub."
    ],
    docs: [],
    photos: []
  },
  p4: {
    title: "ParcelIA",
    tag: "Projet Académique",
    description: "Projet de recherche et développement collaboratif mené en équipe de 2ème année, couvrant la méthodologie Agile, la rédaction technique et la gestion de version.",
    techs: ["Recherche", "Documentation", "Gestion de projet"],
    github: "https://github.com/mlft9/projet-etude-2eme-annee",
    website: "",
    assetDir: "assets/projects/p04_projet_etude_2eme_annee",
    situation: "Projet d'étude collaboratif de deuxième année visant à approfondir un sujet technique en équipe.",
    task: "Mener un projet de recherche et de développement en équipe dans le cadre du cursus académique.",
    actions: [
      "Recherche bibliographique et état de l'art sur le sujet choisi.",
      "Répartition des tâches et gestion de projet en méthodologie Agile.",
      "Rédaction du rapport technique et préparation de la soutenance.",
      "Collaboration via Git et outils de gestion de version."
    ],
    results: [
      "Projet validé avec succès lors de la soutenance de fin d'année.",
      "Compétences en travail d'équipe et gestion de projet renforcées.",
      "Documentation technique complète livrée."
    ],
    docs: [],
    photos: []
  },
  p5: {
    title: "Plateforme Surveillance IoT",
    tag: "IoT & Réseaux",
    description: "Serveur de supervision temps réel interrogeant des micro-contrôleurs IoT via Websockets, avec dashboard de métriques (température, ping) et alertes SMTP automatiques.",
    techs: ["Python", "Supervision", "Websockets", "Micro-contrôleurs", "Networking"],
    github: "https://github.com/JMDcoding/Platform_Surveillan_IOT",
    website: "",
    assetDir: "assets/projects/p05_plateforme_surveillance_iot",
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
    photos: []
  },
  p6: {
    title: "Malware PY — Cadre Pédagogique",
    tag: "Cybersécurité & Python",
    description: "Étude et développement d'un prototype de malware éducatif en Python dans un environnement sandboxé, pour comprendre les vecteurs d'attaque et renforcer les capacités de détection.",
    techs: ["Python", "Sécurité Offensive", "Analyse Malware", "Pédagogie"],
    github: "https://github.com/JMDcoding/Malware_PY-Cadre-pedagogique-",
    website: "projet-malware.html",
    assetDir: "assets/projects/p06_malware_py",
    situation: "Comprendre les mécanismes internes des malwares est essentiel pour mieux les détecter et les neutraliser. Ce projet a été réalisé dans un cadre strictement pédagogique. Utilité en entreprise : Renforcer les capacités de la Blue Team à anticiper et détecter les menaces, et développer des signatures de détection pour se protéger contre les attaques réelles.",
    task: "Développer et analyser un programme malveillant simulé en Python pour comprendre les techniques d'attaque et renforcer les capacités de défense.",
    actions: [
      "Étude des techniques courantes de malware (keylogger, reverse shell, persistance).",
      "Développement d'un prototype de malware éducatif en Python dans un environnement sandboxé.",
      "Analyse du comportement du malware avec des outils de détection (Wireshark, Process Monitor).",
      "Rédaction d'un rapport détaillant les contre-mesures et méthodes de détection."
    ],
    results: [
      "Compréhension approfondie des vecteurs d'attaque et mécanismes de persistance.",
      "Identification des signatures comportementales exploitables par les outils de détection.",
      "Documentation pédagogique complète à usage académique."
    ],
    docs: [],
    photos: []
  },
  p7: {
    title: "Great Road Racer — Jeu Vidéo",
    tag: "Développement & Jeu",
    description: "Jeu vidéo de course automobile avec système de scoring progressif, gestion des collisions et plusieurs niveaux de difficulté.",
    techs: ["Game Development", "Programmation", "Design de niveaux"],
    github: "https://github.com/JMDcoding/Jeu-Video-Great_Road_Racer-",
    website: "https://jeu-video-great-road-racer.vercel.app/",
    assetDir: "assets/projects/p07_great_road_racer",
    situation: "Projet de développement d'un jeu vidéo de course automobile pour explorer les mécaniques de game design et de programmation graphique.",
    task: "Concevoir et développer un jeu de course jouable avec système de scoring et niveaux progressifs.",
    actions: [
      "Conception du game design document (GDD) et des mécaniques de course.",
      "Développement du moteur de jeu et des contrôles véhicule.",
      "Création des assets graphiques et des circuits de course.",
      "Implémentation du système de score et de progression."
    ],
    results: [
      "Jeu fonctionnel avec plusieurs niveaux de difficulté.",
      "Gameplay fluide et responsive avec gestion des collisions.",
      "Projet présenté et validé en contexte académique."
    ],
    docs: [],
    photos: []
  },
  p8: {
    title: "Virtualisation Pare-feu VM",
    tag: "Infrastructure & Sécurité",
    description: "Déploiement et configuration d'un pare-feu virtuel (pfSense/IPFire) dans un environnement de virtualisation pour sécuriser le cloisonnement réseau inter-VM.",
    techs: ["VMware", "Virtualisation", "Pare-feu", "Réseau"],
    github: "https://github.com/JMDcoding/Machine_Virtuelle_Firewall_Virtualisation",
    website: "projet-virtualisation.html",
    assetDir: "assets/projects/p08_virtualisation_pare_feu",
    situation: "La sécurisation des environnements virtualisés nécessitait le déploiement et la configuration de pare-feux au sein de machines virtuelles. Utilité en entreprise : Réduire les coûts matériels en mutualisant les serveurs physiques, faciliter la reprise d'activité (PRA) et sécuriser le réseau via le cloisonnement inter-département.",
    task: "Mettre en place et configurer un pare-feu virtuel dans un environnement de virtualisation pour sécuriser les flux réseau inter-VM.",
    actions: [
      "Déploiement d'un environnement de virtualisation avec plusieurs machines virtuelles.",
      "Installation et configuration d'un pare-feu virtuel (pfSense/IPFire).",
      "Mise en place de règles de filtrage et de NAT entre les segments réseau.",
      "Tests de sécurité et validation du cloisonnement réseau."
    ],
    results: [
      "Pare-feu virtuel opérationnel assurant le filtrage inter-VLAN.",
      "Isolation effective des segments réseau vérifiée par tests de pénétration.",
      "Documentation complète de la configuration déployée."
    ],
    docs: [],
    photos: []
  },
  p9: {
    title: "Scan Anti-Poison",
    tag: "Cybersécurité & Réseau",
    description: "Outil Python de détection et de prévention en temps réel des attaques ARP Poisoning/Spoofing sur réseau local, avec système d'alerte automatique.",
    techs: ["Python", "ARP Spoofing", "Détection d'intrusion", "Réseau"],
    github: "https://github.com/JMDcoding/Scan_Anti-Poison",
    website: "",
    assetDir: "assets/projects/p09_scan_anti_poison",
    situation: "Les attaques de type ARP Poisoning représentent une menace courante sur les réseaux locaux, permettant l'interception de données sensibles.",
    task: "Développer un outil de détection et de prévention des attaques ARP Poisoning sur un réseau local.",
    actions: [
      "Analyse des mécanismes d'attaque ARP Spoofing/Poisoning.",
      "Développement d'un scanner Python pour détecter les incohérences dans les tables ARP.",
      "Implémentation d'un système d'alerte en temps réel lors de la détection d'une attaque.",
      "Tests en environnement contrôlé pour valider l'efficacité de la détection."
    ],
    results: [
      "Détection fiable des attaques ARP Poisoning en temps réel.",
      "Alertes automatiques permettant une réaction rapide de l'administrateur.",
      "Outil documenté et réutilisable en contexte professionnel."
    ],
    docs: [],
    photos: []
  },
  p10: {
    title: "Projet Big Data",
    tag: "Data & Analyse",
    description: "Projet académique d'analyse et de traitement de flux de données massifs avec Python et Pandas, incluant visualisation statistique et extraction d'insights exploitables.",
    techs: ["Python", "Pandas", "Big Data", "Analyse de données"],
    github: "https://github.com/JMDcoding/Projet_Big-Data-",
    website: "",
    assetDir: "assets/projects/p10_projet_big_data",
    situation: "Projet académique visant la compréhension des flux de données massifs et leur traitement à grande échelle.",
    task: "Analyser et traiter de larges volumes de données en exploitant les outils et méthodes du Big Data.",
    actions: [
      "Collecte et nettoyage de jeux de données volumineux.",
      "Exploration et visualisation des données avec Python et Pandas.",
      "Application d'algorithmes de traitement et d'analyse statistique.",
      "Présentation des résultats sous forme de rapports et visualisations."
    ],
    results: [
      "Traitement efficace de jeux de données de plusieurs gigaoctets.",
      "Insights exploitables extraits des données analysées.",
      "Compétences Big Data validées dans le cadre du cursus."
    ],
    docs: [],
    photos: []
  },
  p11: {
    title: "Taureau (Taurus)",
    tag: "Développement",
    description: "Application logicielle complète développée avec une architecture structurée, versionnée sous Git et documentée selon les bonnes pratiques de l'industrie.",
    techs: ["Programmation", "Architecture logicielle"],
    github: "https://github.com/JMDcoding/Taurus",
    website: "",
    assetDir: "assets/projects/p11_taurus",
    situation: "Projet de développement logiciel axé sur la création d'une application fonctionnelle.",
    task: "Développer une application complète en respectant les bonnes pratiques de développement.",
    actions: [
      "Conception de l'architecture logicielle et modélisation des données.",
      "Développement itératif avec gestion de version Git.",
      "Tests et débogage pour assurer la fiabilité de l'application.",
      "Documentation technique du projet."
    ],
    results: [
      "Application fonctionnelle livrée et documentée.",
      "Code source versionné et structuré sur GitHub.",
      "Bonnes pratiques de développement appliquées."
    ],
    docs: [],
    photos: []
  },
  p12: {
    title: "Coopérative Orient",
    tag: "Développement Web",
    description: "Application de gestion pour une coopérative associative, intégrant la gestion des membres, des transactions et des opérations courantes avec base de données.",
    techs: ["Web", "Gestion", "Base de données"],
    github: "https://github.com/JMDcoding/Cooperative-Orient",
    website: "https://coop-rative-orient.vercel.app/#farms",
    assetDir: "assets/projects/p12_cooperative_orient",
    situation: "Projet de développement d'une application de gestion pour une coopérative.",
    task: "Concevoir et développer un système de gestion adapté aux besoins d'une coopérative.",
    actions: [
      "Analyse des besoins métier et conception du cahier des charges.",
      "Développement de l'application avec gestion des membres et des transactions.",
      "Mise en place de la base de données et des interfaces utilisateur.",
      "Tests fonctionnels et validation avec les utilisateurs finaux."
    ],
    results: [
      "Application de gestion fonctionnelle déployée.",
      "Gestion simplifiée des membres et des opérations de la coopérative.",
      "Interface utilisateur intuitive et accessible."
    ],
    docs: [],
    photos: []
  },
  p13: {
    title: "Honeypot SSH, Grafana & Loki",
    tag: "Supervision & Cyber",
    description: "Honeypot SSH Cowrie conteneurisé via Docker, avec collecte Loki et tableau de bord Grafana pour géolocaliser les IPs malveillantes et analyser les tentatives d'intrusion.",
    techs: ["Honeypot Cowrie", "Grafana", "Loki", "Docker Compose", "Python Scripting"],
    github: "https://github.com/JMDcoding/Honeypot-",
    website: "projet-honeypot.html",
    assetDir: "assets/projects/p13_honeypot_ssh",
    situation: "L'organisation manquait de visibilité sur les attaques externes ciblant ses serveurs exposés sur Internet, rendant impossible la mise en place de politiques de bannissement proactives ou de veille sur les menaces. Utilité en entreprise : Agir comme un système d'alerte précoce (leurre) pour détecter et analyser les attaquants, bloquant ainsi les adresses IP malveillantes avant qu'elles ne touchent l'infrastructure de production.",
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
    photos: []
  },
  p14: {
    title: "Manipulation PFSENSE",
    tag: "Infrastructure & Sécurité",
    description: "Configurations avancées de pare-feux pfSense : règles de filtrage granulaires, NAT avancé, tunnels VPN IPsec/OpenVPN et segmentation VLAN avec routage inter-VLAN.",
    techs: ["pfSense", "Firewall", "NAT", "VLANs", "VPN"],
    github: "https://github.com/JMDcoding/Manipulation_PFSENSE",
    website: "projet-pfsense.html",
    assetDir: "assets/projects/p14_manipulation_pfsense",
    situation: "La configuration avancée de pare-feux pfSense est essentielle pour sécuriser les infrastructures réseau d'entreprise. Utilité en entreprise : Sécuriser la frontière du réseau (pare-feu externe/interne), gérer le trafic inter-sites sécurisé, isoler les services critiques (DMZ) et permettre aux collaborateurs d'accéder au SI de manière sécurisée en télétravail via VPN.",
    task: "Maîtriser les configurations avancées de pfSense : règles de filtrage, NAT, VPN et segmentation VLAN.",
    actions: [
      "Installation et configuration initiale de pfSense sur environnement virtualisé.",
      "Mise en place de règles de filtrage granulaires et de NAT avancé.",
      "Configuration de tunnels VPN IPsec et OpenVPN.",
      "Segmentation réseau via VLANs avec routage inter-VLAN."
    ],
    results: [
      "Maîtrise opérationnelle de pfSense démontrée.",
      "Infrastructure réseau segmentée et sécurisée.",
      "Documentation détaillée des configurations déployées."
    ],
    docs: [],
    photos: []
  },
  p15: {
    title: "Bank COBOL",
    tag: "Développement Legacy",
    description: "Application bancaire en COBOL simulant les opérations mainframe courantes : gestion de comptes, dépôts, retraits et persistance par fichiers séquentiels.",
    techs: ["COBOL", "Mainframe", "Système bancaire", "Batch Processing"],
    github: "https://github.com/JMDcoding/Bank_COBOL",
    website: "",
    assetDir: "assets/projects/p15_bank_cobol",
    situation: "Les systèmes bancaires historiques fonctionnent encore largement sur des programmes COBOL. Comprendre ce langage est essentiel pour maintenir ces systèmes critiques.",
    task: "Développer une application bancaire en COBOL simulant les opérations courantes d'un système bancaire.",
    actions: [
      "Apprentissage du langage COBOL et de ses paradigmes de programmation.",
      "Développement d'un programme de gestion de comptes bancaires.",
      "Implémentation des opérations de dépôt, retrait et consultation de solde.",
      "Gestion des fichiers séquentiels pour la persistance des données."
    ],
    results: [
      "Application bancaire fonctionnelle en COBOL.",
      "Compréhension des systèmes legacy et de leur maintenance.",
      "Compétence rare et valorisée sur le marché de l'emploi."
    ],
    docs: [],
    photos: []
  },
  p16: {
    title: "FORTUNE — Micro-finance",
    tag: "Développement & Finance",
    description: "Application de micro-finance permettant la gestion des prêts, des remboursements, des calculs d'intérêts et des échéanciers pour des opérations financières à petite échelle.",
    techs: ["Application", "Finance", "Gestion"],
    github: "https://github.com/JMDcoding/FORTUNE",
    website: "",
    assetDir: "assets/projects/p16_fortune",
    situation: "Le secteur de la micro-finance nécessite des outils adaptés pour gérer les opérations financières à petite échelle.",
    task: "Développer une application de micro-finance permettant la gestion simplifiée des opérations financières.",
    actions: [
      "Analyse des besoins spécifiques au secteur de la micro-finance.",
      "Conception de l'architecture applicative et du modèle de données.",
      "Développement des modules de gestion des prêts et des remboursements.",
      "Tests fonctionnels et validation des calculs financiers."
    ],
    results: [
      "Application de micro-finance opérationnelle.",
      "Gestion automatisée des calculs d'intérêts et des échéanciers.",
      "Interface utilisateur adaptée aux besoins du secteur."
    ],
    docs: [],
    photos: []
  },
  p17: {
    title: "Suivant (Next)",
    tag: "Développement",
    description: "Projet de développement logiciel technique avec architecture conçue, versioning Git et documentation complète du code source.",
    techs: ["Programmation", "Développement"],
    github: "https://github.com/JMDcoding/Next",
    website: "",
    assetDir: "assets/projects/p17_suivant_next",
    situation: "Projet de développement logiciel.",
    task: "Concevoir et développer une application dans le cadre d'un projet technique.",
    actions: [
      "Conception de l'architecture et planification du développement.",
      "Développement itératif avec versioning Git.",
      "Tests et validation du programme.",
      "Documentation du code source."
    ],
    results: [
      "Application fonctionnelle livrée.",
      "Code versionné et documenté sur GitHub.",
      "Objectifs du projet atteints."
    ],
    docs: [],
    photos: []
  },
  p18: {
    title: "Analyseur de Logs Python",
    tag: "Développement & Script",
    description: "Script Python d'analyse de logs Apache/Syslog en flux continu par expressions régulières, avec détection de requêtes malveillantes et rapports HTML automatisés.",
    techs: ["Python", "Regex", "Logs Auditing", "Automation", "Security Alerts"],
    github: "https://github.com/JMDcoding/Analyse-de-Logs",
    website: "projet-analyse-logs.html",
    assetDir: "assets/projects/p18_analyseur_logs",
    situation: "Les fichiers de logs Apache et serveurs d'accès généraient des gigaoctets de données inexploitées, dissimulant des tentatives récurrentes de force brute ou d'injections de requêtes suspectes. Utilité en entreprise : Identifier en temps réel les comportements anormaux, centraliser les alertes de sécurité (SIEM), satisfaire aux obligations légales de traçabilité et réduire le temps d'investigation en cas d'incident cyber.",
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
    photos: []
  },
  p19: {
    title: "Optimisation & Analyse IA",
    tag: "IA & Data Science",
    description: "Développement de modèles de Machine Learning pour l'analyse prédictive et l'optimisation de processus, avec entraînement, tuning d'hyperparamètres et visualisation des résultats.",
    techs: ["Python", "Machine Learning", "Analyse de données", "Optimisation"],
    github: "https://github.com/JMDcoding/Projet_Optimisation_Analyse_IA",
    website: "",
    assetDir: "assets/projects/p19_optimisation_analyse_ia",
    situation: "L'optimisation des processus par l'intelligence artificielle est un enjeu majeur pour les entreprises cherchant à améliorer leur efficacité opérationnelle.",
    task: "Développer des modèles d'analyse et d'optimisation basés sur l'IA pour résoudre des problèmes complexes.",
    actions: [
      "Collecte et préparation des jeux de données pour l'entraînement des modèles.",
      "Développement et entraînement de modèles de Machine Learning.",
      "Optimisation des hyperparamètres et évaluation des performances.",
      "Visualisation des résultats et interprétation des prédictions."
    ],
    results: [
      "Modèles d'IA performants avec des métriques de précision satisfaisantes.",
      "Insights exploitables pour l'optimisation des processus cibles.",
      "Documentation technique et rapport d'analyse complets."
    ],
    docs: [],
    photos: []
  },
  p20: {
    title: "Site Web Hack for Good",
    tag: "Développement Web & Éthique",
    description: "Plateforme web dédiée à la promotion du hacking éthique et à la sensibilisation à la cybersécurité responsable, avec contenus pédagogiques accessibles.",
    techs: ["HTML5", "CSS3", "JavaScript", "Sécurité Web"],
    github: "https://github.com/JMDcoding/Site-Web-Hack-for-good-",
    website: "https://site-web-hack-for-good-xuka-4ffxc2tol.vercel.app/",
    assetDir: "assets/projects/p20_site_hack_for_good",
    situation: "Le hacking éthique et la sensibilisation à la cybersécurité nécessitent des plateformes accessibles pour éduquer le public.",
    task: "Développer un site web dédié à la promotion du hacking éthique et de la cybersécurité responsable.",
    actions: [
      "Conception du design et de l'expérience utilisateur du site.",
      "Développement front-end avec technologies web modernes.",
      "Rédaction de contenus pédagogiques sur la cybersécurité.",
      "Déploiement et tests d'accessibilité."
    ],
    results: [
      "Site web fonctionnel promouvant le hacking éthique.",
      "Contenus pédagogiques accessibles à un large public.",
      "Interface moderne et responsive."
    ],
    docs: [],
    photos: []
  },
  p21: {
    title: "Simulation Phénomène Physique",
    tag: "Science & Programmation",
    description: "Programme de simulation numérique de phénomènes physiques avec interface de visualisation graphique interactive et validation par comparaison aux modèles théoriques.",
    techs: ["Simulation", "Physique", "Programmation", "Visualisation"],
    github: "https://github.com/JMDcoding/Simumlation-Phenomene-Physique",
    website: "",
    assetDir: "assets/projects/p21_simulation_physique",
    situation: "La simulation numérique de phénomènes physiques permet de comprendre et visualiser des concepts complexes de manière interactive.",
    task: "Développer un programme de simulation de phénomènes physiques avec visualisation en temps réel.",
    actions: [
      "Modélisation mathématique du phénomène physique choisi.",
      "Développement de l'algorithme de simulation numérique.",
      "Création de l'interface de visualisation graphique.",
      "Validation des résultats par comparaison avec les modèles théoriques."
    ],
    results: [
      "Simulation fonctionnelle reproduisant fidèlement le phénomène physique.",
      "Visualisation interactive permettant de modifier les paramètres en temps réel.",
      "Résultats cohérents avec les prédictions théoriques."
    ],
    docs: [],
    photos: []
  },
  p22: {
    title: "Projet RA/RV — Réalité Augmentée",
    tag: "Innovation & Immersif",
    description: "Application mobile de réalité augmentée/virtuelle développée avec Unity 3D et le SDK Vuforia, incluant suivi de marqueurs et superposition d'objets 3D en temps réel.",
    techs: ["Unity 3D", "Vuforia", "Réalité Augmentée", "Réalité Virtuelle", "C#"],
    github: "https://github.com/JMDcoding/Projet_RA-RV",
    website: "",
    assetDir: "assets/projects/p22_projet_ra_rv",
    situation: "Les technologies de réalité augmentée et virtuelle offrent de nouvelles possibilités d'interaction et de visualisation pour de nombreux secteurs.",
    task: "Développer une application exploitant la réalité augmentée et/ou virtuelle avec Unity 3D et Vuforia.",
    actions: [
      "Apprentissage et maîtrise de Unity 3D et du SDK Vuforia.",
      "Conception de l'expérience immersive et des interactions utilisateur.",
      "Développement de l'application avec suivi de marqueurs et superposition 3D.",
      "Tests sur appareils mobiles et optimisation des performances."
    ],
    results: [
      "Application RA/RV fonctionnelle déployée sur mobile.",
      "Expérience immersive fluide avec détection précise des marqueurs.",
      "Compétences en technologies immersives validées."
    ],
    docs: [],
    photos: []
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize icons
  lucide.createIcons();

  /* =========================================================================
     1. SCROLL REVEAL EFFECT
     ========================================================================= */
  const revealElements = document.querySelectorAll('.reveal');
  const scrollContainer = document.querySelector('.scroll-container');

  if ('IntersectionObserver' in window && scrollContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
      root: scrollContainer // Observe within the scroll snap container
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
     3. SCROLL SPY ACTIVE LINK STATE (Updated for Scroll Snap Container)
     ========================================================================= */
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item, .mobile-nav-link');

  function scrollSpy() {
    if (!scrollContainer) return;
    
    let currentSectionId = 'home';
    const containerScrollTop = scrollContainer.scrollTop;
    const containerHeight = scrollContainer.clientHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Determine active section when it occupies the majority of the viewport
      if (containerScrollTop >= (sectionTop - containerHeight / 2) && containerScrollTop < (sectionTop + sectionHeight - containerHeight / 2)) {
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

  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Initial run
  }

  /* =========================================================================
     4. CONTACT FORM VALIDATION & SIMULATION (Monochrome Theme)
     ========================================================================= */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const oldBtnHTML = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin text-white"></i> Transmission...`;
      lucide.createIcons();
      
      // Simulate form post
      setTimeout(() => {
        formStatus.classList.remove('hidden', 'border-red-500/20', 'bg-red-500/5', 'text-red-400');
        // Grayscale / monochrome success styles
        formStatus.classList.add('border-white/10', 'bg-white/5', 'text-white');
        formStatus.innerHTML = `<strong>Message envoyé avec succès !</strong> Votre demande a été reçue. Jean-Marc DUSSAUD vous répondra très rapidement.`;
        
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
   5. DYNAMIC PROJECT DETAIL MODAL (iOS Grayscale Edition)
   ========================================================================= */
function openProjectModal(projectId) {
  const modal = document.getElementById('project-detail-modal');
  const headerEl = document.getElementById('project-modal-header');
  const bodyEl = document.getElementById('project-modal-body');
  const footerEl = document.getElementById('project-modal-footer');
  
  if (!modal || !headerEl || !bodyEl || !footerEl || !projectsData[projectId]) return;

  const project = projectsData[projectId];

  // 1. Inject Header (Monochrome tags)
  headerEl.innerHTML = `
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-[8px] font-mono tracking-widest text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded font-bold uppercase">${project.tag}</span>
    </div>
    <h3 class="font-space font-bold text-base text-white">${project.title}</h3>
  `;

  // 2. Inject Badges & STAR details in the scroll body (Monochrome tags & icons)
  let techBadgesHTML = project.techs.map(t => `<span class="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 hover:border-white/30 transition-colors">${t}</span>`).join('');
  
  let actionsListHTML = project.actions.map(a => `
    <li class="flex items-start gap-2 text-[11px] text-slate-300">
      <i data-lucide="check" class="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5"></i>
      <span>${a}</span>
    </li>
  `).join('');

  let resultsListHTML = project.results.map(r => `
    <li class="flex items-start gap-2 text-[11px] text-slate-200">
      <i data-lucide="trending-up" class="w-3.5 h-3.5 text-slate-300 flex-shrink-0 mt-0.5"></i>
      <span>${r}</span>
    </li>
  `).join('');

  let docsListHTML = project.docs.map(d => `
    <div class="flex items-center justify-between p-2.5 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-colors group">
      <div class="flex items-center gap-2">
        <i data-lucide="${d.type === 'schema' ? 'network' : d.type === 'code' ? 'terminal' : 'file-text'}" class="w-4 h-4 text-slate-400"></i>
        <span class="text-[10px] font-mono text-slate-400 group-hover:text-white">${d.name}</span>
      </div>
      <button onclick="alert('Téléchargement simulé de : ${d.name}')" class="text-[9px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-white flex items-center gap-1">
        <i data-lucide="download" class="w-3 h-3"></i> Ouvrir
      </button>
    </div>
  `).join('');

  let photosListHTML = project.photos.map(p => `
    <div class="flex flex-col gap-1.5 bg-black/40 border border-white/5 rounded-xl p-2.5">
      <img src="${p.url}" alt="${p.caption}" class="w-full h-auto rounded border border-white/5 filter brightness-90 grayscale" />
      <span class="text-[9px] font-mono text-slate-500 text-center">${p.caption}</span>
    </div>
  `).join('');

  bodyEl.innerHTML = `
    <!-- Tech Stack -->
    <div class="flex flex-wrap gap-1 border-b border-white/5 pb-3">
      ${techBadgesHTML}
    </div>

    <!-- STAR - Situation -->
    <div class="flex flex-col gap-1">
      <h4 class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">1. Situation &amp; Contexte</h4>
      <p class="text-slate-300 text-[11px] leading-relaxed">${project.situation}</p>
    </div>

    <!-- STAR - Tâche -->
    <div class="flex flex-col gap-1">
      <h4 class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">2. Tâche &amp; Objectif</h4>
      <p class="text-slate-300 text-[11px] leading-relaxed">${project.task}</p>
    </div>

    <!-- STAR - Actions -->
    <div class="flex flex-col gap-1.5">
      <h4 class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">3. Actions Techniques</h4>
      <ul class="flex flex-col gap-2 pl-0.5">
        ${actionsListHTML}
      </ul>
    </div>

    <!-- STAR - Résultats -->
    <div class="bg-white/5 border border-white/10 p-3.5 rounded-xl flex flex-col gap-2 shadow-sm">
      <h4 class="text-[9px] font-mono font-bold uppercase tracking-wider text-white">4. Résultats &amp; Impact (Métriques)</h4>
      <ul class="flex flex-col gap-2 pl-0.5">
        ${resultsListHTML}
      </ul>
    </div>

    <!-- Documents joints -->
    <div class="flex flex-col gap-2">
      <h4 class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">Documents techniques joints</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${docsListHTML}
      </div>
    </div>

    <!-- Galerie de photos / schémas -->
    <div class="flex flex-col gap-2">
      <h4 class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">Illustrations</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${photosListHTML}
      </div>
    </div>
  `;

  // 3. Inject Footer Buttons (Black theme)
  let websiteButtonHTML = '';
  if (project.website) {
    websiteButtonHTML = `
      <a href="${project.website}" target="_blank" rel="noreferrer" class="px-3.5 py-2.5 rounded-xl border border-white/10 bg-black text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/15 transition-colors shadow-sm">
        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        Version Web
      </a>
    `;
  }

  footerEl.innerHTML = `
    ${websiteButtonHTML}
    <a href="${project.github}" target="_blank" rel="noreferrer" class="px-3.5 py-2.5 rounded-xl border border-white/10 bg-black text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/15 transition-colors shadow-sm">
      <i data-lucide="github" class="w-3.5 h-3.5"></i>
      Consulter sur GitHub
    </a>
    <button onclick="closeProjectModalDirect()" class="px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 text-[10px] font-bold uppercase transition-colors">
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
      
      const hasWebBtn = (greenDotProjectsIds.includes(id) && p.website) 
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
