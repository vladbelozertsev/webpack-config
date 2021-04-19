import workingHoursYmap from './working-hours-ymap';
import newsSwiper from './news-swiper';
import catchError from '../utils/catch-error';

function index() {
  const page = document.getElementsByTagName('main')[0]?.getAttribute('data-page');
  if (page !== 'main-page') return;

  // Порядок вызова скриптов важен!
  catchError(workingHoursYmap, 'index');
  catchError(newsSwiper, 'index');
}

export default index;
