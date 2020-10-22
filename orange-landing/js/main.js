// 1. плавный скролл на ссылки меню. каждая отправляет на свой раздел
// 2. при мобильной версии кликая на раздел, нужно плавно схлопнуть меню и плавно переместить на раздел


$('.testimonials-block__slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});

$('.awesome-block__slider').slick({
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 641,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

});

$('.pricing-block__slider').slick({
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 641,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

});



const nav = document.querySelector('.header__nav-list');
const navToggle = document.querySelector('.header__nav');
const $header = $('.header');


$('.header__nav').on('click', function(event) {

    console.log($(this));
    nav.classList.toggle('header__nav-active');

});

$('.nav-list-link[href^="#"]').on('click', function(event) {
    event.preventDefault();
    if (nav.classList.contains('header__nav-active')) {
        nav.classList.toggle('header__nav-active');

    } 
    
  
    const $link = $(this);
    const selector = $link.attr('href');
    const $target = $(selector);
    const distance = $target.offset().top;

    $('html, body').animate({scrollTop: distance - $header.outerHeight()}, 500);

});


$(window).on('scroll', function(event) {
  const scrollTop = $('html, body').scrollTop();
  const offset = $('.tabs-block').offset().top;

  if (scrollTop >= offset) {
    $header.addClass('header_sticky');
    const height = $header.outerHeight();
    
    $header.css('top', -height);
    $header.animate({top: 0}, 400);
    $header.removeAttr('style');
  } else if (scrollTop == 0) {
    // $header.removeAttr('style');

    $header.removeClass('header_sticky');
   
    
  }
});

// const tabs = document.querySelectorAll('.tabs-block__tabs_item');
const tabsItems = document.querySelectorAll('.tabs-block__tabs_item');
const tabsTextBlock = document.querySelector('.tabs-block__text_items');
const tabsTextItems = document.querySelectorAll('.tabs-block__text_item');
console.log(tabsTextBlock);
console.log(tabsTextItems);





$('.tabs-block__tabs_item').on('click', function(event) {
  console.log('нажали на таб');
  const activeTab = this;
  const tabId = activeTab.getAttribute('id');
  // console.log(activeTab);
  // console.log(tabId);
  tabsItems.forEach(element => {
    element.classList.remove('tab_active');
  });
  tabsTextItems.forEach(element => {
    element.classList.remove('text_active');
  });
  activeTab.classList.toggle('tab_active');
  tabsTextItems[tabId].classList.toggle('text_active');
  // console.log(tabsTextItems[tabId]);

});

//  if (activeId != 1) {
//     tabsText.querySelectorAll(`.tabs-block__text_item-1`).style.display = 'none';
//  }
// const aweSlider = document.querySelector('.awesome-block__slider');
// const prewButton = aweSlider.querySelector('.slick-prev');
// const newtButton = aweSlider.querySelector('.slick-next');


// if (aweSlider.classList.contains('slick-initialized')) {
//   prewButton.innerHTML = '';
//   newtButton.innerHTML = '';
//   prewButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
//   newtButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
// }