// ==================== TRANSLATION SYSTEM ====================

const translations = {
    // English (default)
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        
        // Home Section
        'home-hello': 'Hello, my name is',
        'home-profession': "I'm a",
        'home-description': "AI Engineer and Computer Scientist crafting intelligent, automated solutions through creative code.",
        'home-download-cv': 'Download CV',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': "I'm ChaMatheus and",
        'about-profession': 'Computer Engineer',
        'about-description': "I'm a curious and creative person driven by a constant desire to evolve. With a technical background in Graphic Computing and experience in web development, process automation, and digital design, I specialize in creating intelligent solutions that bridge technology and human needs.",
        
        // Personal Info
        'personal-info': 'Personal Info',
        'info-birthday': 'Birthday',
        'info-age': 'Age',
        'info-website': 'Website',
        'info-email': 'Email',
        'info-degree': 'Degree',
        'info-phone': 'Phone',
        'info-city': 'City',
        'info-freelance': 'Freelance',
        'info-available': 'Available',
        
        // Skills & Technologies
        'skills': 'Skills',
        'tech-title': 'My Main Technologies',
        
        // Education & Experience
        'education': 'Education',
        'experience': 'Experience',
        'education-title-1': 'Computer Engineering',
        'education-subtitle-1': 'Federal University of Uberlândia',
        'education-desc-1': 'Bachelor degree in Computer Engineering with focus on software development, AI and automation systems.',
        
        'education-title-2': 'Graphic Computing Technician',
        'education-subtitle-2': 'Federal Institute of Education',
        'education-desc-2': 'Technical education in graphic computing, digital design and multimedia production.',
        
        'experience-title-1': 'AI Solutions Developer',
        'experience-subtitle-1': 'Freelance Projects',
        'experience-desc-1': 'Development of intelligent automation systems and AI-powered web applications for various clients.',
        
        'experience-title-2': 'Full Stack Developer',
        'experience-subtitle-2': 'Tech Projects',
        'experience-desc-2': 'Creation of responsive web applications and digital solutions using modern technologies.',

        // Services
        'services-title': 'Services',
        'service-web-dev': 'Web Development',
        'service-web-dev-description': 'I build modern, responsive web applications with a strong focus on performance and user experience.',
        'service-automation': 'Process Automation',
        'service-automation-description': 'I turn repetitive tasks into smart automated workflows, boosting efficiency and reducing errors.',
        'service-graphic': 'Graphic Designer',
        'service-graphic-description': 'I create creative and professional visual materials to bring ideas and brands to life.',
        'service-computer-graphics': 'Computer Graphics',
        'service-computer-graphics-description': 'Experience in modeling, visualization, and technical design — combining creativity and precision.',
        'service-software-eng': 'Software Engineering',
        'service-software-eng-description': 'I plan and develop scalable, well-structured solutions based on solid engineering principles.',
        'service-data-analysis': 'Data analysis',
        'service-data-analysis-description': 'I analyze data to generate strategic insights, building reports and dashboards that support smart decision-making.',
        
        // Portfolio
        'portfolio-title': 'Portfolio',
        'portfolio-featured': 'Featured Project',
        'portfolio-previous': 'Previous Projects',
        'portfolio-subtitle': 'My Last Projects',
        'project-date': 'December 2024',
        'project-description-1': 'Complete e-commerce solution with React, Node.js and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
        'project-live': 'Live Demo',
        'project-github': 'GitHub',
        
        // Events
        'events-title': 'Events & Participations',
        'event-speaker': 'Participant',
        'event-slides': 'View Slides',
        'event-certificate': 'Certificate',
        
        // Contact
        'contact-title': 'Contact Me',
        'contact-question': 'Have You Any Questions?',
        'contact-available': "I'M AT YOUR SERVICES",
        'contact-call': 'Call Me On',
        'contact-office': 'Office',
        'contact-email': 'Email',
        'contact-website': 'Website',
        'contact-send-email': 'SEND ME AN EMAIL',
        'contact-responsive': "I'M VERY RESPONSIVE TO MESSAGES",
        'contact-form-name': 'Name',
        'contact-form-email': 'Email',
        'contact-form-subject': 'Subject',
        'contact-form-message': 'Message',
        'contact-form-send': 'Send Message',
        
        // Color Meanings
        'colors-title': 'What My Colors Represent',
        'colors-intro': 'Each color in my palette tells a story about my approach to technology and creativity:',
        
        // Tea Colors
        'color-1-title': 'Matcha Green',
        'color-1-subtitle': 'Fresh & Renewing',
        'color-1-desc': 'Like matcha tea, this color represents freshness, growth, and renewal - reflecting a calm mind that brings new ideas to life in every project.',
        
        'color-2-title': 'Black Tea Brown',
        'color-2-subtitle': 'Stable & Grounded',
        'color-2-desc': 'Inspired by rich black tea, this earthy tone symbolizes stability and reliability - the solid foundation upon which trustworthy solutions are built.',
        
        'color-3-title': 'Oolong Amber',
        'color-3-subtitle': 'Balanced & Harmonious',
        'color-3-desc': 'Capturing the perfect balance of oolong tea, this amber shade represents the harmony between technical precision and creative expression.',
        
        'color-4-title': 'Green Tea Leaf',
        'color-4-subtitle': 'Growing & Evolving',
        'color-4-desc': 'Like green tea leaves unfolding in hot water, this color embodies continuous growth, learning, and evolution in both skills and perspective.',
        
        'color-5-title': 'Herbal Tea Terracotta',
        'color-5-subtitle': 'Warm & Welcoming',
        'color-5-desc': 'This warm terracotta reflects the comforting nature of herbal tea - creating an inviting space where ideas can be shared and collaborations can flourish.',
        
        // Hire Me button
        'hire-me': 'Hire Me',

        // Logo
        'logo-tagline': 'Digital Portfolio',

        'portfolio-maintenance-title': 'Take a Tea and Relax!',
        'portfolio-maintenance-description': "I'm brewing something special in this section. Updates coming soon with amazing projects!",
        
        // Typing animation strings
        'typing-strings': JSON.stringify([
            "AI Engineer",
            "Computer Engineer", 
            "Full Stack Developer",
            "Automation Specialist",
            "Creative Problem Solver"
        ])
    },

    // Portuguese
    'pt': {
        // Navigation
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-services': 'Serviços',
        'nav-portfolio': 'Portfólio',
        'nav-contact': 'Contato',
        
        // Home Section
        'home-hello': 'Olá, me chamo',
        'home-profession': 'Eu sou',
        'home-description': 'Engenheiro de IA e Cientista da Computação criando soluções inteligentes e automatizadas através de código criativo.',
        'home-download-cv': 'Baixar CV',
        
        // About Section
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Eu sou ChaMatheus um',
        'about-profession': 'Engenheiro de Computação',
        'about-description': 'Sou uma pessoa movida pela curiosidade, criatividade e desejo constante de evoluir. Com formação técnica em Computação Gráfica e experiência em desenvolvimento web, automação de processos e design digital, especializo-me em criar soluções inteligentes que conectam tecnologia e necessidades humanas.',

        // Personal Info
        'personal-info': 'Informações Pessoais',
        'info-birthday': 'Aniversário',
        'info-age': 'Idade',
        'info-website': 'Website',
        'info-email': 'Email',
        'info-degree': 'Formação',
        'info-phone': 'Telefone',
        'info-city': 'Cidade',
        'info-freelance': 'Freelance',
        'info-available': 'Disponível',
        
        // Skills & Technologies
        'skills': 'Habilidades',
        'tech-title': 'Minhas Principais Tecnologias',
        
        // Education & Experience
        'education': 'Educação',
        'experience': 'Experiência',
        'education-title-1': 'Engenharia de Computação',
        'education-subtitle-1': 'Universidade Federal de Uberlândia',
        'education-desc-1': 'Bacharelado em Engenharia de Computação com foco em desenvolvimento de software, IA e sistemas de automação.',
        
        'education-title-2': 'Técnico em Computação Gráfica',
        'education-subtitle-2': 'Instituto Federal de Educação',
        'education-desc-2': 'Formação técnica em computação gráfica, design digital e produção multimídia.',
        
        'experience-title-1': 'Desenvolvedor de Soluções em IA',
        'experience-subtitle-1': 'Projetos Freelance',
        'experience-desc-1': 'Desenvolvimento de sistemas inteligentes de automação e aplicações web com IA para diversos clientes.',
        
        'experience-title-2': 'Desenvolvedor Full Stack',
        'experience-subtitle-2': 'Projetos Tech',
        'experience-desc-2': 'Criação de aplicações web responsivas e soluções digitais usando tecnologias modernas.',

        // Services
        'services-title': 'Serviços',
        'service-web-dev': 'Desenvolvimento Web',
        'service-web-dev-description': 'Desenvolvo aplicações web modernas e responsivas com forte foco em performance e experiência do usuário.',
        'service-automation': 'Automação de Processos',
        'service-automation-description': 'Transformo tarefas repetitivas em fluxos de trabalho automatizados inteligentes, aumentando a eficiência e reduzindo erros.',
        'service-graphic': 'Designer Gráfico',
        'service-graphic-description': 'Crio materiais visuais criativos e profissionais para dar vida a ideias e marcas.',
        'service-computer-graphics': 'Computação Gráfica',
        'service-computer-graphics-description': 'Experiência em modelagem, visualização e design técnico — unindo criatividade e precisão.',
        'service-software-eng': 'Engenharia de Software',
        'service-software-eng-description': 'Planejo e desenvolvo soluções escaláveis e bem estruturadas baseadas em princípios sólidos de engenharia.',
        'service-data-analysis': 'Análise de Dados',
        'service-data-analysis-description': 'Analiso dados para gerar insights estratégicos, construindo relatórios e dashboards que suportam a tomada de decisão inteligente.',
        
        // Portfolio
        'portfolio-title': 'Portfólio',
        'portfolio-featured': 'Projeto em Destaque',
        'portfolio-previous': 'Projetos Anteriores',
        'portfolio-subtitle': 'Meus Últimos Projetos',
        'project-date': 'Dezembro 2024',
        'project-description-1': 'Solução completa de e-commerce com React, Node.js e MongoDB. Inclui autenticação de usuários, processamento de pagamentos e painel administrativo.',
        'project-live': 'Demo Online',
        'project-github': 'GitHub',
        
        // Events
        'events-title': 'Eventos & Participações',
        'event-speaker': 'Participante',
        'event-slides': 'Ver Slides',
        'event-certificate': 'Certificado',
        
        // Contact
        'contact-title': 'Entre em Contato',
        'contact-question': 'Tem Alguma Pergunta?',
        'contact-available': 'ESTOU À SUA DISPOSIÇÃO',
        'contact-call': 'Ligue Para Mim',
        'contact-office': 'Escritório',
        'contact-email': 'Email',
        'contact-website': 'Website',
        'contact-send-email': 'ENVIE-ME UM EMAIL',
        'contact-responsive': 'RESPONDO RAPIDAMENTE A MENSAGENS',
        'contact-form-name': 'Nome',
        'contact-form-email': 'Email',
        'contact-form-subject': 'Assunto',
        'contact-form-message': 'Mensagem',
        'contact-form-send': 'Enviar Mensagem',
        
        // Color Meanings
        'colors-title': 'O Que Minhas Cores Representam',
        'colors-intro': 'Cada cor na minha paleta conta uma história sobre minha abordagem à tecnologia e criatividade:',
        
        // Tea Colors
        'color-1-title': 'Verde Matcha',
        'color-1-subtitle': 'Frescor & Renovação',
        'color-1-desc': 'Como o chá matcha, esta cor representa frescor, crescimento e renovação - refletindo uma mente calma que traz novas ideias à vida em cada projeto.',
        
        'color-2-title': 'Marrom Chá Preto',
        'color-2-subtitle': 'Estável & Fundamentado',
        'color-2-desc': 'Inspirado no rico chá preto, este tom terroso simboliza estabilidade e confiabilidade - a base sólida sobre a qual soluções confiáveis são construídas.',
        
        'color-3-title': 'Âmbar Oolong',
        'color-3-subtitle': 'Equilibrado & Harmonioso',
        'color-3-desc': 'Capturando o equilíbrio perfeito do chá oolong, este tom âmbar representa a harmonia entre precisão técnica e expressão criativa.',
        
        'color-4-title': 'Folha de Chá Verde',
        'color-4-subtitle': 'Crescimento & Evolução',
        'color-4-desc': 'Como folhas de chá verde se desdobrando em água quente, esta cor incorpora crescimento contínuo, aprendizado e evolução tanto em habilidades quanto em perspectiva.',
        
        'color-5-title': 'Terracota de Chá de Ervas',
        'color-5-subtitle': 'Aconchegante & Acolhedor',
        'color-5-desc': 'Esta terracota quente reflete a natureza reconfortante do chá de ervas - criando um espaço convidativo onde ideias podem ser compartilhadas e colaborações podem florescer.',
        
        // Hire Me button
        'hire-me': 'Contrate-me',

        'portfolio-maintenance-title': 'Tome um Chá e Relaxe!',
        'portfolio-maintenance-description': 'Estou preparando algo especial nesta seção. Atualizações em breve com projetos incríveis!',

        // Logo
        'logo-tagline': 'Portfólio Digital',
        
        // Typing animation strings
        'typing-strings': JSON.stringify([
            "Engenheiro de IA",
            "Engenheiro de Computação",
            "Desenvolvedor Full Stack", 
            "Especialista em Automação",
            "Solucionador Criativo"
        ])
    },

    // French
    'fr': {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        
        // Home Section
        'home-hello': 'Bonjour, je m\'appelle',
        'home-profession': 'Je suis',
        'home-description': 'Ingénieur en IA et informaticien créant des solutions intelligentes et automatisées grâce à un code créatif.',
        'home-download-cv': 'Télécharger CV',
        
        // About Section
        'about-title': 'À Propos de Moi',
        'about-subtitle': 'Je suis ChaMatheus et',
        'about-profession': 'Ingénieur en Informatique',
        'about-description': 'Je suis une personne curieuse et créative, animée par un désir constant d\'évoluer. Avec une formation technique en informatique graphique et de l\'expérience dans le développement web, l\'automatisation des processus et le design digital, je me spécialise dans la création de solutions intelligentes qui relient la technologie et les besoins humains.',

        // Personal Info
        'personal-info': 'Informations Personnelles',
        'info-birthday': 'Anniversaire',
        'info-age': 'Âge',
        'info-website': 'Site Web',
        'info-email': 'Email',
        'info-degree': 'Diplôme',
        'info-phone': 'Téléphone',
        'info-city': 'Ville',
        'info-freelance': 'Freelance',
        'info-available': 'Disponible',
        
        // Skills & Technologies
        'skills': 'Compétences',
        'tech-title': 'Mes Technologies Principales',
        
        // Education & Experience
        'education': 'Éducation',
        'experience': 'Expérience',
        'education-title-1': 'Ingénierie en Informatique',
        'education-subtitle-1': 'Université Fédérale d\'Uberlândia',
        'education-desc-1': 'Licence en ingénierie informatique avec spécialisation en développement de logiciels, IA et systèmes d\'automatisation.',
        
        'education-title-2': 'Technicien en Informatique Graphique',
        'education-subtitle-2': 'Institut Fédéral d\'Éducation',
        'education-desc-2': 'Formation technique en informatique graphique, design digital et production multimédia.',
        
        'experience-title-1': 'Développeur de Solutions IA',
        'experience-subtitle-1': 'Projets Freelance',
        'experience-desc-1': 'Développement de systèmes intelligents d\'automatisation et d\'applications web alimentées par l\'IA pour divers clients.',
        
        'experience-title-2': 'Développeur Full Stack',
        'experience-subtitle-2': 'Projets Tech',
        'experience-desc-2': 'Création d\'applications web réactives et de solutions digitales utilisant des technologies modernes.',

        // Services
        'services-title': 'Services',
        'service-web-dev': 'Développement Web',
        'service-web-dev-description': 'Je construis des applications web modernes et réactives en mettant l\'accent sur les performances et l\'expérience utilisateur.',
        'service-automation': 'Automatisation des Processus',
        'service-automation-description': 'Je transforme les tâches répétitives en flux de travail automatisés intelligents, améliorant l\'efficacité et réduisant les erreurs.',
        'service-graphic': 'Designer Graphique',
        'service-graphic-description': 'Je crée des supports visuels créatifs et professionnels pour donner vie aux idées et aux marques.',
        'service-computer-graphics': 'Infographie',
        'service-computer-graphics-description': 'Expérience en modélisation, visualisation et conception technique — alliant créativité et précision.',
        'service-software-eng': 'Ingénierie Logicielle',
        'service-software-eng-description': 'Je conçois et développe des solutions évolutives et bien structurées basées sur des principes d\'ingénierie solides.',
        'service-data-analysis': 'Analyse de Données',
        'service-data-analysis-description': 'J\'analyse les données pour générer des insights stratégiques, en créant des rapports et tableaux de bord qui soutiennent la prise de décision intelligente.',
        
        // Portfolio
        'portfolio-title': 'Portfolio',
        'portfolio-featured': 'Projet en Vedette',
        'portfolio-previous': 'Projets Antérieurs',
        'portfolio-subtitle': 'Mes Derniers Projets',
        'project-date': 'Décembre 2024',
        'project-description-1': 'Solution e-commerce complète avec React, Node.js et MongoDB. Inclut l\'authentification des utilisateurs, le traitement des paiements et un tableau de bord d\'administration.',
        'project-live': 'Démo en Direct',
        'project-github': 'GitHub',
        
        // Events
        'events-title': 'Événements & Participations',
        'event-speaker': 'Participant',
        'event-slides': 'Voir les Diapositives',
        'event-certificate': 'Certificat',
        
        // Contact
        'contact-title': 'Contactez-Moi',
        'contact-question': 'Avez-Vous des Questions?',
        'contact-available': 'JE SUIS À VOTRE SERVICE',
        'contact-call': 'Appelez-Moi',
        'contact-office': 'Bureau',
        'contact-email': 'Email',
        'contact-website': 'Site Web',
        'contact-send-email': 'ENVOYEZ-MOI UN EMAIL',
        'contact-responsive': 'JE RÉPONDS RAPIDEMENT AUX MESSAGES',
        'contact-form-name': 'Nom',
        'contact-form-email': 'Email',
        'contact-form-subject': 'Sujet',
        'contact-form-message': 'Message',
        'contact-form-send': 'Envoyer Message',
        
        // Color Meanings
        'colors-title': 'Ce Que Mes Couleurs Représentent',
        'colors-intro': 'Chaque couleur de ma palette raconte une histoire sur mon approche de la technologie et de la créativité:',
        
        // Tea Colors
        'color-1-title': 'Vert Matcha',
        'color-1-subtitle': 'Fraîcheur & Renouveau',
        'color-1-desc': 'Comme le thé matcha, cette couleur représente la fraîcheur, la croissance et le renouveau - reflétant un esprit calme qui donne vie à de nouvelles idées dans chaque projet.',
        
        'color-2-title': 'Brun Thé Noir',
        'color-2-subtitle': 'Stable & Ancré',
        'color-2-desc': 'Inspiré par le riche thé noir, cette teinte terreuse symbolise la stabilité et la fiabilité - la base solide sur laquelle des solutions dignes de confiance sont construites.',
        
        'color-3-title': 'Ambre Oolong',
        'color-3-subtitle': 'Équilibré & Harmonieux',
        'color-3-desc': 'Capturant l\'équilibre parfait du thé oolong, cette teinte ambrée représente l\'harmonie entre la précision technique et l\'expression créative.',
        
        'color-4-title': 'Feuille de Thé Vert',
        'color-4-subtitle': 'Croissance & Évolution',
        'color-4-desc': 'Comme les feuilles de thé vert se dépliant dans l\'eau chaude, cette couleur incarne la croissance continue, l\'apprentissage et l\'évolution tant dans les compétences que dans la perspective.',
        
        'color-5-title': 'Terre Cuite de Tisane',
        'color-5-subtitle': 'Chaleureux & Accueillant',
        'color-5-desc': 'Cette terre cuite chaude reflète la nature réconfortante de la tisane - créant un espace invitant où les idées peuvent être partagées et les collaborations peuvent s\'épanouir.',
        
        // Hire Me button
        'hire-me': 'Engagez-moi',

        // Logo
        'logo-tagline': 'Portfolio Numérique',

        'portfolio-maintenance-title': 'Prenez un Thé et Détendez-vous!',
        'portfolio-maintenance-description': 'Je prépare quelque chose de spécial dans cette section. Des mises à jour à venir avec des projets incroyables!',
        
        // Typing animation strings
        'typing-strings': JSON.stringify([
            "Ingénieur en IA",
            "Ingénieur en Informatique",
            "Développeur Full Stack",
            "Spécialiste en Automatisation", 
            "Résolveur Créatif"
        ])
    }
};

// ... (o resto do código de tradução permanece igual)
// Current language
let currentLanguage = 'en';
let isReinitializingTyped = false;

// Função ROBUSTA para reinicializar a animação de digitação
function reinitializeTypedAnimation(lang) {
    if (isReinitializingTyped) {
        console.log('Já está reinicializando, ignorando chamada duplicada');
        return;
    }
    
    isReinitializingTyped = true;
    console.log('Iniciando reinicialização da animação para:', lang);
    
    // DESTRUIÇÃO COMPLETA da instância anterior
    if (window.typedInstance) {
        console.log('Destruindo instância anterior do Typed.js');
        try {
            window.typedInstance.destroy();
            window.typedInstance = null;
        } catch (error) {
            console.error('Erro ao destruir instância anterior:', error);
        }
    }
    
    // Limpar COMPLETAMENTE o elemento .typing
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        console.log('Limpando elemento .typing');
        typingElement.textContent = '';
        typingElement.innerHTML = ''; // Limpar qualquer HTML interno
    }
    
    // Delay para garantir que a destruição foi completada
    setTimeout(() => {
        try {
            // Obter as strings de animação para o idioma atual
            const typingStrings = JSON.parse(translations[lang]['typing-strings']);
            console.log('Criando nova animação com strings:', typingStrings);
            
            // Criar NOVA instância do Typed.js
            window.typedInstance = new Typed(".typing", {
                strings: typingStrings,
                typeSpeed: 100,
                backSpeed: 60,
                loop: true,
                cursorChar: '|', // Forçar cursor consistente
                onBegin: function(self) {
                    console.log('Nova animação iniciada com sucesso');
                },
                onDestroy: function(self) {
                    console.log('Animação anterior destruída');
                }
            });
            
        } catch (error) {
            console.error('Erro crítico ao criar nova animação:', error);
        } finally {
            isReinitializingTyped = false;
            console.log('Reinicialização da animação concluída');
        }
    }, 150); // Delay aumentado para garantir limpeza completa
}

// Function to change language
function changeLanguage(lang) {
    console.log('=== INICIANDO MUDANÇA DE IDIOMA PARA:', lang, '===');
    
    // Prevenir mudanças rápidas consecutivas
    if (currentLanguage === lang) {
        console.log('Idioma já está ativo, ignorando');
        return;
    }
    
    currentLanguage = lang;
    
    // 1. Primeiro atualizar todos os textos estáticos
    console.log('Atualizando textos estáticos...');
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Preservar elementos filhos (como o nome "Matheus Fernandes")
                if (element.children.length > 0) {
                    // Se tem filhos, só trocar o texto do próprio elemento, não dos filhos
                    const childNodes = Array.from(element.childNodes);
                    childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = translations[lang][key];
                        }
                    });
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });
    
    // 2. Atualizar botões ativos
    console.log('Atualizando botões de idioma...');
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 3. Salvar preferência
    localStorage.setItem('preferred-language', lang);
    
    // 4. FINALMENTE reinicializar a animação
    console.log('Reinicializando animação de digitação...');
    reinitializeTypedAnimation(lang);
    
    console.log('=== MUDANÇA DE IDIOMA CONCLUÍDA ===');
}

// Initialize language system
function initLanguageSystem() {
    console.log('🚀 INICIALIZANDO SISTEMA DE IDIOMA...');
    
    // Carregar idioma salvo ou usar inglês como padrão
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    console.log('Idioma salvo recuperado:', savedLang);
    
    // Aplicar traduções do idioma salvo
    changeLanguage(savedLang);
    
    // Configurar event listeners UMA VEZ
    console.log('Configurando event listeners...');
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // Remover event listeners anteriores para evitar duplicação
        btn.replaceWith(btn.cloneNode(true));
    });
    
    // Re-aplicar event listeners nos novos elementos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = this.getAttribute('data-lang');
            console.log('📝 Botão de idioma clicado:', lang);
            
            // Pequeno delay para evitar cliques rápidos consecutivos
            if (this.classList.contains('clicked')) {
                console.log('Botão já clicado recentemente, ignorando');
                return;
            }
            
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 1000);
            
            changeLanguage(lang);
        });
    });
    
    console.log('✅ SISTEMA DE IDIOMA INICIALIZADO COM SUCESSO');
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Carregado - Iniciando sistema de idioma');
    
    // Pequeno delay para garantir que tudo está carregado
    setTimeout(initLanguageSystem, 100);
});

// Fallback para casos extremos
window.addEventListener('load', function() {
    console.log('🔄 Página totalmente carregada - Verificando sistema de idioma');
    if (!window.typedInstance) {
        console.log('Instância do Typed.js não encontrada, reinicializando...');
        const savedLang = localStorage.getItem('preferred-language') || 'en';
        reinitializeTypedAnimation(savedLang);
    }
});