// Бургер меню
let burgerMenu = document.querySelector('.header-top__burger-menu');

let burgerMenuWrap = document.querySelector('.burger-menu');

let menuList = document.querySelector('.header-bottom__wrap');

burgerMenu.addEventListener('click', function() {
    burgerMenuWrap.classList.toggle('burger-menu_visible');
	menuList.classList.toggle('header-bottom__wrap_visible');
});

// Попапп заказать звонок
let iconCall = document.querySelector(".callback__icon");

let callWrap = document.querySelector('.callback__wrap');

iconCall.addEventListener('click', function () {
	callWrap.classList.toggle('callback__wrap_visible');
})

// Попапп поиск
let searchBtn = document.querySelector(".search-form__btn");

let searchInput = document.querySelector('.search-form__input');

searchBtn.addEventListener("click", function (e) {
	e.preventDefault();
	searchInput.classList.toggle('search-form__input_visible');
})