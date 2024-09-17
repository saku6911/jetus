const swiper1 = new Swiper('.swiper1', {
    effect: 'fade', 
    loop: true, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    fadeEffect: {
      crossFade: true, 
    },
    speed: 3000,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true, 
    },
  });
  
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,  
  spaceBetween: 10,  
  loop: true,      
  autoplay: {
    delay: 3000,     
    disableOnInteraction: false,  
  },
  pagination: {
    el: '.swiper-pagination', 
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',  
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2, 
    },
    1024: {
      slidesPerView: 4,  
    },
  }
});
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navContainer');
const mainvisualText = document.querySelector('.mainvisualText');
const mainvisualSubText = document.querySelector('.mainvisualSubText');
const textScrollDown = document.querySelector('.textScrollDown');
const scrollDown = document.querySelector('.scrollDown');
const swiperPagination = document.querySelector('.swiper-pagination');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navContainer.classList.toggle('active');

    if (navContainer.classList.contains('active')) {
      mainvisualText.style.opacity = '0';
      mainvisualSubText.style.opacity = '0';
      textScrollDown.style.opacity = '0';
      scrollDown.style.opacity = '0';
      swiperPagination.style.opacity = '0';
  } else {
      mainvisualText.style.opacity = '1';
      mainvisualSubText.style.opacity = '1';
      textScrollDown.style.opacity = '1';
      scrollDown.style.opacity = '1';
      swiperPagination.style.opacity = '1';
  }
    if (navContainer.classList.contains('active')) {
        mainvisualText.style.display = 'none';
        mainvisualSubText.style.display = 'none';
        textScrollDown.style.display = 'none';
        scrollDown.style.display = 'none';
        swiperPagination.style.display = 'none';
    } else {
        mainvisualText.style.display = 'block';
        mainvisualSubText.style.display = 'block';
        textScrollDown.style.display = 'block';
        scrollDown.style.display = 'block';
        swiperPagination.style.display = 'block';
    }
});