import Swiper, { Navigation, Pagination } from 'swiper';
import bp from '../utils/breakpoints';

const newsSwiper = () => {
  Swiper.use([Navigation, Pagination]);

  new Swiper('.news__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.news__swiper-next',
      prevEl: '.news__swiper-prev',
    },
    pagination: {
      el: '.news__swiper-pagination',
    },
    breakpoints: {
      [bp['xl']]: {
        slidesPerView: 3,
      },
      [bp['sm']]: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
};

export default newsSwiper;
