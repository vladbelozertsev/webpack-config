const headerBtnBurger = () => {
  const btnEl = document.getElementsByClassName('header__btn-burger')[0];
  const menuEl = document.getElementsByClassName('header__menu')[0];

  btnEl.addEventListener('click', () => {
    btnEl.classList.toggle('btn-burger_close');
    menuEl.classList.toggle('max-h-550px');
  });
};

export default headerBtnBurger;
