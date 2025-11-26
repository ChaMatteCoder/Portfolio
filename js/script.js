/*==================== typing animation =================*/

// Inicializar com as strings do idioma padrão
function initializeTypedAnimation() {
    const defaultLang = localStorage.getItem('preferred-language') || 'en';
    const typingStrings = JSON.parse(translations[defaultLang]['typing-strings']);
    
    window.typedInstance = new Typed(".typing", {
        strings: typingStrings,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initializeTypedAnimation();
});
/*==================== Navegação lateral =================*/
/*==================== Navegação lateral =================*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

// Inicialização - Garantir que apenas a home esteja ativa
function initSections() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active", "back-section");
    }
    document.querySelector("#home").classList.add("active");
}

// Chamar inicialização quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    initSections();
});

/* Mostra a seção alvo com transição de slide */
function showSection(element) {
    const href = element.getAttribute("href");
    if (!href || href === "#") return;
    
    const target = href.split("#")[1];
    const targetSection = document.querySelector("#" + target);
    
    if (!targetSection) return;
    
    // Encontrar a seção atual
    const currentActiveSection = document.querySelector(".section.active");
    
    // Se já está na mesma seção, não fazer nada
    if (currentActiveSection === targetSection) return;
    
    // Remover todas as classes primeiro
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active", "back-section");
    }
    
    // Se há uma seção atual, adicionar back-section para animação de saída
    if (currentActiveSection) {
        currentActiveSection.classList.add("back-section");
    }
    
    // Adicionar active na seção alvo para animação de entrada
    targetSection.classList.add("active");
    
    // Remover back-section após a animação
    setTimeout(() => {
        if (currentActiveSection) {
            currentActiveSection.classList.remove("back-section");
        }
    }, 400);
}

/* Marca a aba ativa no menu */
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
    }
    element.classList.add("active");
}

/* Adiciona os eventos de clique na navegação */
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(e) {
        e.preventDefault();

        // Atualizar navegação
        updateNav(this);
        
        // Mostrar seção com transição
        showSection(this);
        
        // Fechar menu em mobile
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

/*==================== Botão "Hire Me" =================*/
document.querySelector(".hire-me").addEventListener("click", function(e) {
    e.preventDefault();
    
    // Encontrar o link de contato no menu para atualizar a navegação
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        updateNav(contactLink);
        showSection(contactLink);
    }
});

/*==================== Navegação Responsiva =================*/
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* ===== COLOR CARDS EXPANSION FUNCTIONALITY ===== */
/* ===== COLOR CARDS SMOOTH FUNCTIONALITY ===== */
function initializeColorCardsSmooth() {
    const colorCards = document.querySelectorAll('.color-card');
    
    // Define índices para animação escalonada
    colorCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
    
    colorCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remove active class from all cards
            colorCards.forEach(c => {
                c.classList.remove('active');
                c.style.height = '360px';
            });
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get the color theme from data attribute
            const colorTheme = this.getAttribute('data-color');
            
            // Change the theme
            setActiveStyle(colorTheme);
            
            // Adjust height for active card to fit content
            if (this.classList.contains('active')) {
                this.style.height = 'auto';
            }
        });
    });
    
    // Close expanded card when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.color-card')) {
            const activeCard = document.querySelector('.color-card.active');
            if (activeCard) {
                activeCard.classList.remove('active');
                activeCard.style.height = '360px';
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeColorCardsSmooth();
    
    // Set initial active card based on current theme
    const currentStyle = document.querySelector('.alternate-style:not([disabled])');
    if (currentStyle) {
        const currentColor = currentStyle.getAttribute('title');
        const activeCard = document.querySelector(`.color-card[data-color="${currentColor}"]`);
        if (activeCard) {
            activeCard.classList.add('active');
            activeCard.style.height = 'auto';
        }
    }
});

/*==================== Tech Carousel =================*/
function initializeTechCarousel() {
    const carousel = document.querySelector('.tech-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const techItems = document.querySelectorAll('.tech-item');
    
    const itemWidth = techItems[0].offsetWidth + 15; // width + gap
    const itemsToScroll = 3; // Agora rola 3 itens por vez
    let currentPosition = 0;
    
    function updateButtons() {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        prevBtn.classList.toggle('disabled', currentPosition === 0);
        nextBtn.classList.toggle('disabled', currentPosition >= maxScroll);
    }
    
    function scrollCarousel(direction) {
        const scrollAmount = itemsToScroll * itemWidth;
        
        if (direction === 'next') {
            currentPosition = Math.min(currentPosition + scrollAmount, carousel.scrollWidth - carousel.clientWidth);
        } else if (direction === 'prev') {
            currentPosition = Math.max(currentPosition - scrollAmount, 0);
        }
        
        carousel.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
        
        updateButtons();
    }
    
    // Event listeners para os botões
    nextBtn.addEventListener('click', () => scrollCarousel('next'));
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    
    // Atualizar scroll position quando o usuário scrollar manualmente
    carousel.addEventListener('scroll', () => {
        currentPosition = carousel.scrollLeft;
        updateButtons();
    });
    
    // Atualizar botões no resize da janela
    window.addEventListener('resize', () => {
        // Recalcular a posição atual baseada no novo tamanho
        const scrollPercentage = currentPosition / (carousel.scrollWidth - carousel.clientWidth);
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        currentPosition = Math.min(scrollPercentage * maxScroll, maxScroll);
        
        carousel.scrollTo({
            left: currentPosition,
            behavior: 'auto'
        });
        
        updateButtons();
    });
    
    // Inicializar estado dos botões
    updateButtons();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeTechCarousel);