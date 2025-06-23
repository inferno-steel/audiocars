// Бургер меню
const burgerMenu = document.querySelector('.header-top__burger-menu');
const burgerMenuWrap = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header-bottom__wrap');
const iconCall = document.querySelector(".order-top__icon");
const callWrap = document.querySelector('.order-top__callback');
const searchBtn = document.querySelector(".search-form__btn");
const searchInput = document.querySelector('.search-form__inner');

burgerMenu.addEventListener('click', function(e) {
	e._burgerClick = true;
	
	searchInput.classList.remove('search-form__inner_visible');
	callWrap.classList.remove('order-top__callback_visible');
    burgerMenuWrap.classList.toggle('burger-menu_visible');
	menuList.classList.toggle('header-bottom__wrap_visible');
	document.addEventListener("click", (e) => {
		if (e._burgerClick == true || 
			e.target.classList.contains('header-top__burger-menu') ||
			e.target.classList.contains('header-bottom__wrap')
		) return 
			burgerMenuWrap.classList.remove('burger-menu_visible');
			menuList.classList.remove('header-bottom__wrap_visible');
	})
});

// Попапп заказать звонок
iconCall.addEventListener('click', function (e) {
	e._popappClick = true;
	burgerMenuWrap.classList.remove('burger-menu_visible');
	menuList.classList.remove('header-bottom__wrap_visible');
	searchInput.classList.remove('search-form__inner_visible');
	callWrap.classList.toggle('order-top__callback_visible');
	document.addEventListener("click", (e) => {
		console.log(e);
		if (e._popappClick == true || 
			e.target.classList.contains('order-top__callback') ||
			e.target.classList.contains('order-top__link')
		) return 
			callWrap.classList.remove('order-top__callback_visible');
	})
})

// Попапп поиск
searchBtn.addEventListener("click", function (e) {
	e.preventDefault();
	burgerMenuWrap.classList.remove('burger-menu_visible');
	menuList.classList.remove('header-bottom__wrap_visible');
	callWrap.classList.remove('order-top__callback_visible');
	searchInput.classList.toggle('search-form__inner_visible');
})