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
    nextEl: '.arrow-prev',
    prevEl: '.arrow-next',
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

const swiperPrev = document.querySelector('.arrow-prev');
const swiperNext = document.querySelector('.arrow-next');

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

const contactForm = document.querySelector('.contact-form');
const name = contactForm.querySelector('.form-input-name');
const email = contactForm.querySelector('.form-input-email');
const formBtn = document.querySelector('.btn-form');

function error(message, element) {
  element.style.borderColor = 'red';
  let errorEl = document.createElement('span');
  errorEl.className = "error";
  errorEl.style.color = 'red';
  errorEl.innerText = 'Enter your ' + message + ', please';
  element.after(errorEl);
}

function clear() {
  this.style.borderColor = '#737171';
  if (this.nextSibling && this.nextSibling.className == 'error') {
    this.nextSibling.remove();
  }
}

function checkEmail() {
  let result = ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value);
  if (!email.value || result) {
    error('e-mail', email); return false;
  } else return true;
}

function checkName() {
  let result = !/^[a-zA-Z_-]+( [a-zA-Z_-]+)*|[а-яА-Я_-]+( [а-яА-Я_-]+)*$/.test(name.value);
  if (!name.value || result) {
    error('name', name); return false;
  } else return true;
}

name.addEventListener('focusout', checkName);
name.addEventListener('focusin', clear);
email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', clear);
formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clear.call(name);
  clear.call(email);
  if (checkName() && checkEmail()) {
    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
    name.value = '';
    email.value = '';
    formBtn.value = 'thanks';
    setTimeout(() => { formBtn.value = 'Submit'; }, 1500);
  }
});


// const form = document.querySelector("form");
// const email = document.getElementById("email");

// email.addEventListener("input", (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = ""; 
//     emailError.className = "error"; 
//   } else {
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = "You need to enter an email address.";
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = "Entered value needs to be an email address.";
//   } else if (email.validity.tooShort) {
//     emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//   }

//   emailError.className = "error active";
// }