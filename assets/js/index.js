//header
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg-scroll")
const remove_class_on_scroll = () => header.classList.remove("bg-scroll")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

//gallery-section 
const gallery = document.querySelector('.hero-slider');

const gallerySlider = new Swiper('.hero-slider', {
    loop: true,
    direction: "vertical",
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: '.hero-pagination',
    },
    navigation: {
      nextEl: '.hero-slider-next',
    },
    slidesPerView: 1,
    spaceBetween: 5,
  });

if (window.innerWidth <= '768') {
  gallerySlider.disable();
  document.querySelector('.hero-slider-next').style.display = 'none';
}

//news-section 
const newsSlider = new Swiper('.news-slider', {
  loop: true,

  pagination: {
    el: '.news-pagination',
  },

  navigation: {
    nextEl: '.news-slider-left',
    prevEl: '.news-slider-right',
  },

  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {

    320: {
      slidesPerView: 1,
    },
    424: {
      slidesPerView: 1,
    },
    525: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

const swiperPrev = document.querySelector('.news-slider-left');
const swiperNext = document.querySelector('.news-slider-right');

swiperPrev.addEventListener('click', () => {
  newsSlider.slidePrev();
});
swiperNext.addEventListener('click', () => {
  newsSlider.slideNext();
});

//gallery-section 
Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});

//contact-section 
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

var stylesArray = [
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
    {
    "visibility": "off"
    }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]