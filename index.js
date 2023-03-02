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

//

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

//

let map;
let mapMarker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.677525, lng:   -73.930540 },
        zoom: 14,
        mapId: '766b53887ab54fb2'
    });

    mapMarker = new google.maps.Marker({
        position: { lat: 40.685429, lng: -73.943844},
        map: map,
        icon: {
            url: './img/map-marker.svg',
            scaledSize: new google.maps.Size(100, 100),
        },
        animation: google.maps.Animation.BOUNCE,
    })
}

window.initMap = initMap;

//

// $('.news__slider-wrapper--inner').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: $('.slick-button--prev'),
//     nextArrow: $('.slick-button--next'),
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 375,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });



//

const scrollToTopButton = document.querySelector('.button__scroll-to-top');

// Get a reference to the footer element
const footer = document.querySelector('footer');

// Listen for scroll events on the window object
window.addEventListener('scroll', () => {
    // Get the distance between the top of the footer and the user's current scroll position
    const distanceFromFooter = footer.getBoundingClientRect().top - window.innerHeight;

    // If the user has scrolled past the footer, show the button
    if (distanceFromFooter <= -90) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
