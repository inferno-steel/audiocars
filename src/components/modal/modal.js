const body = document.querySelector('body');

const buttons = document.querySelectorAll('.callback__link');

const modalAll = document.querySelectorAll('.modal');

const firstModal = modalAll[0];

const loginModal = modalAll[2];

const modalBtnAll = document.querySelectorAll(".modal__btn");

const lastModalBtn = Array.from(modalBtnAll).pop();

const lastModal = Array.from(modalAll).pop();

let closeIcon = document.querySelectorAll('.modal__close');

let loginBtn = document.querySelectorAll(".login-btn");

console.log(loginBtn);




// Скрывает скролл у body при вызове модального окна
function visibleBodyModal() {
    modalAll.forEach((mod) => {
        if (mod.classList.contains('modal-active')) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "inherit";
        }
    })
}

// Скрывает скролл у body при вызове модального окна
function hiddenBodyModal() {
	modalAll.forEach((mod) => {	
		if (mod.classList.contains('modal', 'modal-active')) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "inherit";
		}
	})
}

// Вешаем клики на кнопки вызова модального окна и добавляем активные классы модальным окнам
buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
            firstModal.classList.add('modal-active');
            hiddenBodyModal();
    })
})


loginBtn.forEach((log) => {
	log.addEventListener("click",function () {
		loginModal.classList.add("modal-active");
		hiddenBodyModal();
	})
})

// Вешаем клики на иконки закрытия модальных окон и удаляем активный класс с модального окна
closeIcon.forEach((close) => {
	close.addEventListener('click', function () {
		modalAll.forEach((modal) => {
			modal.classList.remove('modal-active');
            visibleBodyModal();
		})
	});
})

// Закрытие первого модального окна при клике вне его области
document.addEventListener('click', function (e) {
	if (e.target == firstModal){
		firstModal.classList.remove("modal-active");
		visibleBodyModal();
	}
})

// Закрытие второго модального окна при клике вне его области
document.addEventListener('click', function (e) {
	if (e.target == lastModal){
		lastModal.classList.remove("modal-active");
		visibleBodyModal();
	}
})

// Закрытие второго модального окна кликом по кнопке "за покупками"
lastModalBtn.addEventListener("click", function () {
	lastModal.classList.remove("modal-active");
})
