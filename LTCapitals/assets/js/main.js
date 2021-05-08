var menuResponsive = {
    init: function() {
        this.toggleMenu();
    },
    toggleMenu: function() {
        var button = document.querySelector(".menu__bar");
        var menu = document.querySelector(".menu__all");
        button.addEventListener("click", function() {
            menu.classList.toggle("show");
        });
    },
}


menuResponsive.init();
$(document).ready(function() {
    $('.banner__carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        mouseDrag: false,
        touchDrag: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    })
    var selector = $('.banner__carousel');

    $('.my-next-button').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button').click(function() {
        selector.trigger('prev.owl.carousel');
    });
})