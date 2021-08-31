import menuTpl from '../templates/menu.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);

const markup = menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend', markup);