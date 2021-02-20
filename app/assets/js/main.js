import animate from './modules/animation';
import toggleMenu from './modules/menu';
import toggleModal from './modules/modal';
import toggleAccordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
	animate('.animation-item', 'visible');
  toggleMenu({ 
    triggerSelector: '.burger', 
    menuSelector: '.header__nav', 
    triggerActiveClass: 'burger--active', 
    menuActiveClass: 'nav--active' 
  })
	toggleModal('.order-btn', '.modal', 'modal--active');
  toggleAccordion('.accordion', 'accordion--active');

	// sliders
	const connectionSlider = new Swiper('.connection__slider-container', {
		slidesPerView: 1,
		loop: true,
    navigation: {
      nextEl: '.connection__slider-btn.swiper-button-next',
      prevEl: '.connection__slider-btn.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    }
  });
	const partnersSlider = new Swiper('.partners__slider-container', {
		spaceBetween: 10,
		loop: true,
    navigation: {
      nextEl: '.partners__slider-btn.swiper-button-next',
      prevEl: '.partners__slider-btn.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5
      }
    }
  });

  const reviewsSlider = new Swiper('.reviews__slider-container', {
		loop: true,
    navigation: {
      nextEl: '.reviews__slider-btn.swiper-button-next',
      prevEl: '.reviews__slider-btn.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 56
      }
    }
  });

  const teamSlider = new Swiper('.team__slider-container', {
		slidesPerView: 4,
		loop: true,
    navigation: {
      nextEl: '.team__slider-btn.swiper-button-next',
      prevEl: '.team__slider-btn.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 61
      }
    }
  });
});