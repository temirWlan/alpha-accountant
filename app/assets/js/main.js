import animate from './modules/animation';
import toggleMenu from './modules/menu';
import toggleModal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	animate('.animation-item', 'visible');
	toggleModal('.order-btn', '.modal', 'modal--active');

	// sliders
	const connectionSlider = new Swiper('.connection__slider-container', {
		slidesPerView: 1,
		loop: true,
    navigation: {
      nextEl: '.connection__slider-btn.swiper-button-next',
      prevEl: '.connection__slider-btn.swiper-button-prev',
    },
  });
	const partnersSlider = new Swiper('.partners__slider-container', {
		slidesPerView: 5,
		spaceBetween: 10,
		loop: true,
    navigation: {
      nextEl: '.partners__slider-btn.swiper-button-next',
      prevEl: '.partners__slider-btn.swiper-button-prev',
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider-container', {
		slidesPerView: 4,
		spaceBetween: 56,
		loop: true,
    navigation: {
      nextEl: '.reviews__slider-btn.swiper-button-next',
      prevEl: '.reviews__slider-btn.swiper-button-prev',
    },
  });

  const teamSlider = new Swiper('.team__slider-container', {
		slidesPerView: 4,
		spaceBetween: 61,
		loop: true,
    navigation: {
      nextEl: '.team__slider-btn.swiper-button-next',
      prevEl: '.team__slider-btn.swiper-button-prev',
    },
  });
});