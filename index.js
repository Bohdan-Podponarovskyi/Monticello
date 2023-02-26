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
    // pauseOnFocus: true
});

// document.querySelectorAll('a[id]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

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
            // origin: new google.maps.Point(0, 0),
            // anchor: new google.maps.Point(25, 25),
            // duration: 500000, // Duration of one animation cycle (in ms)
            // delay: 500, // Delay before the animation starts (in ms)
            // easing: 'easeInOut',
        },
        animation: google.maps.Animation.BOUNCE,
    })

    // mapMarker.setAnimation(google.maps.Animation.BOUNCE);
    // setTimeout(function(){ mapMarker.setAnimation(null); }, 450);

}

$('.news__slider-wrapper--inner').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.slick-button--prev'),
    nextArrow: $('.slick-button--next'),
    // centerMode: true,
    // centerPadding: "40px"
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
});

window.initMap = initMap;

