// navbar link active
$(document).ready(function () {
  activeLink('about');
  activeLink('home');

  modalToggle('header-phone', 'navbar', 'phone');

  toggleElement('fasilitas');
  toggleElement('location');
  toggleElement('prestasi');
});

function activeLink(name) {
  if (window.location.href.indexOf(name) > -1) {
    $(`.${name}-link`).addClass('active-link');
  }
}

// navbar scroll
$(window).scroll(function () {
  if (window.location.href.indexOf('home') > -1) {
    navScroll('897');
  } else if (window.location.href.indexOf('about') > -1) {
    navScroll('50');
  }
});

function navScroll(num) {
  if ($(window).scrollTop() >= num) {
    $('.header').addClass('header-dark');
  } else {
    $('.header').removeClass('header-dark');
  }
}

$('.header__dropdown').on('click', function () {
  $;
});
// modal

function modalToggle(modal, name, ec) {
  $(`.btn-show-${name}-${ec}`).on('click', function () {
    $(`.${modal}`).toggleClass('show');
    $(`.${modal}`).toggleClass('trans-0');
  });
  $(`.btn-close-${name}-${ec}`).on('click', function () {
    $(`.${modal}`).toggleClass('show');
    $(`.${modal}`).toggleClass('trans-0');
  });
}

// home - sambutan text overflow elipsis
$('.card__desc--show').on('click', function () {
  let desc = '.card__desc--text';
  $(this).siblings(desc).toggleClass('undesc');
  if ($(this).siblings(desc).hasClass('undesc')) {
    $(this).addClass('card-down');
    $(this).text('Lebih Sedikit');
  } else if ($(this).siblings(`${desc}:not(.undesc)`)) {
    $(this).removeClass(`card-down`);
    $(this).text('...Selengkapnya');
  }
});

// popup profile section
function toggleElement(name) {
  $(`.btn-show-${name}`).on('click', function () {
    $(`.${name}`).addClass('show');
    $(`.${name}__wrapper`).addClass('trans-0');
    $(document).on('keyup', function (evt) {
      if ($(`.${name}`).hasClass('show')) {
        if (evt.keyCode == 27) {
          $(`.${name}`).removeClass('show');
          $(`.${name}__wrapper`).removeClass('trans-0');
        }
      }
    });
  });

  $(`.btn-close-${name}`).on('click', function () {
    $(`.${name}`).removeClass('show');
    $(`.${name}__wrapper`).removeClass('trans-0');
  });
}

$('.btn-swipe').on('click', function () {
  $(this).toggleClass('btn-top-swipe');
  $(this).parents('.fasilitas-box__info--swipe').toggleClass('trans-0');
  $(this).parents('.fasilitas-box').toggleClass('bg-primary');

  if ($(this).hasClass('btn-top-swipe')) {
    $(this).children('p').text('Hide Detail');
    $(this).children('ion-icon').attr('name', 'chevron-down-outline');
  } else {
    $(this).children('p').text('Show Detail');
    $(this).children('ion-icon').attr('name', 'chevron-up-outline');
  }
});

// $(window).on('click', function (e) {
//   if (!$('.fasilitas-box__info--swipe').get(0).contains(e.target) && !$('.btn-swipe').get(0).contains(e.target)) {
//     $('.fasilitas-box__info--swipe').removeClass('trans-0');
//     $('.btn-swipe').removeClass('btn-top-swipe');
//   }
// });

// swiperr / about.html
if (window.location.href.indexOf('about') > -1) {
  var swiper = new Swiper('.mySwiper', {
    // slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
