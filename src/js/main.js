// test
document.addEventListener('click', function (e) {
	let a = e.target;
	console.log(a);
	console.log(callWrap.classList.contains('callback__wrap_visible'));
	console.log(e.target !== callWrap);
	console.log(e.target !== callWrap && callWrap.classList.contains('callback__wrap_visible'));
})