import headerBtnBurger from './header-btn-burger';
import catchError from '../utils/catch-error';

function common() {
  // Порядок вызова скриптов важен!
  catchError(headerBtnBurger, 'common');
}

export default common;
