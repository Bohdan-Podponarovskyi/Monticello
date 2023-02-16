$('.header__slider-wrapper').slick({
    dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    vertical: true,
    speed: 120

});
document.querySelectorAll('a[href^="#projects"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// $('.header__banner').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.677525, lng:   -73.930540 },
        zoom: 14,
        mapId: '766b53887ab54fb2'
    });

    marker = new google.maps.Marker({
        position: { lat: 40.685429, lng: -73.943844},
        map: map,
        icon: './img/map-marker.svg',
    })
}

window.initMap = initMap;