// Portfolio Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Projects Carousel
    const projectsTrack = document.querySelector('.projects-track');
    const projectCards = document.querySelectorAll('.project-card');
    const projectPrev = document.querySelector('.project-prev');
    const projectNext = document.querySelector('.project-next');
    
    // Events Carousel
    const eventsTrack = document.querySelector('.events-track');
    const eventCards = document.querySelectorAll('.event-card');
    const eventPrev = document.querySelector('.event-prev');
    const eventNext = document.querySelector('.event-next');
    
    let projectCurrentIndex = 0;
    let eventCurrentIndex = 0;
    const cardsPerView = getCardsPerView();
    
    function getCardsPerView() {
        if (window.innerWidth < 576) return 1;
        if (window.innerWidth < 768) return 2;
        return 3;
    }
    
    function updateCarousel(track, currentIndex, cards) {
        const cardWidth = cards[0].offsetWidth + 30; // width + margin
        const translateX = -currentIndex * cardWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }
    
    // Projects Carousel Navigation
    if (projectNext && projectPrev) {
        projectNext.addEventListener('click', () => {
            const maxIndex = projectCards.length - cardsPerView;
            if (projectCurrentIndex < maxIndex) {
                projectCurrentIndex++;
                updateCarousel(projectsTrack, projectCurrentIndex, projectCards);
            }
        });
        
        projectPrev.addEventListener('click', () => {
            if (projectCurrentIndex > 0) {
                projectCurrentIndex--;
                updateCarousel(projectsTrack, projectCurrentIndex, projectCards);
            }
        });
    }
    
    // Events Carousel Navigation
    if (eventNext && eventPrev) {
        eventNext.addEventListener('click', () => {
            const maxIndex = eventCards.length - cardsPerView;
            if (eventCurrentIndex < maxIndex) {
                eventCurrentIndex++;
                updateCarousel(eventsTrack, eventCurrentIndex, eventCards);
            }
        });
        
        eventPrev.addEventListener('click', () => {
            if (eventCurrentIndex > 0) {
                eventCurrentIndex--;
                updateCarousel(eventsTrack, eventCurrentIndex, eventCards);
            }
        });
    }
    
    // Update on window resize
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        // Reset indices if necessary
        projectCurrentIndex = Math.min(projectCurrentIndex, projectCards.length - newCardsPerView);
        eventCurrentIndex = Math.min(eventCurrentIndex, eventCards.length - newCardsPerView);
        
        updateCarousel(projectsTrack, projectCurrentIndex, projectCards);
        updateCarousel(eventsTrack, eventCurrentIndex, eventCards);
    });
    
    // Initialize carousels
    updateCarousel(projectsTrack, projectCurrentIndex, projectCards);
    updateCarousel(eventsTrack, eventCurrentIndex, eventCards);
});