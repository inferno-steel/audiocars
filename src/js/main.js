/* Scroll menu */
const link = document.querySelector(".main__link");

link?.addEventListener("click", () => {
	document.getElementById(link.getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
});
