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

//hero-section
$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.project-section').offset().top }, 'slow');
    return false;
  });
});

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
  autoplay: {
    delay: 4000,
  },
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
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.6686, lng: -73.899},
    zoom: 43.5,
    mapId: '2f084b4895741534'
  });

const marker = new google.maps.Marker({
  position: { lat: 40.6781, lng: -73.8981 },
  map: map,
  title: "Monticello",
  icon: {
    url: "https://i.postimg.cc/30jd33nS/Pin.png",
    scaledSize: new google.maps.Size(100, 100),
  },
});
}

const form = document.querySelector("form");
const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}
