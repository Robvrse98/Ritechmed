const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000, // Cambia cada 3 segundos
        disableOnInteraction: false,  // No detiene el autoplay al interactuar
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Permite que los puntos sean clicables
    },
});