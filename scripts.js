const myApp = {
    initHeaderSlider: function () {
        $('.header__slider-wrapper').slick({
            dots: true,
            infinite: true,
            prevArrow: false,
            nextArrow: false,
            vertical: true,
            speed: 120,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
        });
    },

    initSmoothScroll: function () {
        document.querySelectorAll('a.header__nav-link, a.header__scroll-button').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    initGoogleMap: function () {
        let map;
        let mapMarker;

        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 40.677525, lng: -73.930540 },
                zoom: 14,
                mapId: '766b53887ab54fb2'
            });

            mapMarker = new google.maps.Marker({
                position: { lat: 40.685429, lng: -73.943844 },
                map: map,
                icon: {
                    url: './img/map-marker.svg',
                    scaledSize: new google.maps.Size(100, 100),
                },
                animation: google.maps.Animation.BOUNCE,
            })
        }

        window.initMap = initMap;
    },

    initScrollToTopButton: function () {
        const scrollToTopButton = document.querySelector('.button__scroll-to-top');
        const footer = document.querySelector('footer');

        window.addEventListener('scroll', () => {
            const distanceFromFooter = footer.getBoundingClientRect().top - window.innerHeight;
            if (distanceFromFooter <= -90) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        scrollToTopButton.addEventListener('click', scrollToTop);
    },

    initBurgerMenu: function () {
        const burgerMenu = document.querySelector('.burger-menu');
        const nav = document.querySelector('.header__nav');

        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('show');
            burgerMenu.classList.toggle('active');
        });
    },

    initNewsSlider: function () {
        $('.news__slider-wrapper--inner').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $('.slick-button--prev'),
            nextArrow: $('.slick-button--next'),
            mobileFirst: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1439,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 319,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
};

myApp.initHeaderSlider()
myApp.initSmoothScroll()
myApp.initGoogleMap()
myApp.initScrollToTopButton()
myApp.initBurgerMenu()
myApp.initNewsSlider()


