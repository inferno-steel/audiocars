const titles = document.querySelectorAll(".filter__inner");
const contents = document.querySelectorAll(".filter__content");
const filterBtn = document.querySelector(".filter__button");
const filterWrap = document.querySelector(".filter__wrap");
const sortingCatalog = document.querySelector(".catalog__sorting");
const priceSortingVisible = document.querySelector(".price-sorting__visible");
const priceSortingHidden = document.querySelector(".price-sorting__hidden");


// Открытие поп-аппа "фильтр" на мобильной версии
filterBtn?.addEventListener("click", () => {
    if (filterWrap.classList.contains('filter__wrap_active')) {
        filterWrap.style.maxHeight = "0px";
        sortingCatalog.style.maxHeight = "0px";
        filterWrap.classList.remove('filter__wrap_active');
        sortingCatalog.classList.remove('catalog__sorting_active');
    } else {
        filterWrap.style.maxHeight = filterWrap.scrollHeight + "px";
        filterWrap.classList.add('filter__wrap_active');
        sortingCatalog.style.maxHeight = sortingCatalog.scrollHeight + "px";
        sortingCatalog.classList.add('catalog__sorting_active');
    }
});


// Открытие аккордиона с категориями
titles.forEach(item => item.addEventListener('click', () => {

    const svg = item.lastElementChild;
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('filter__content_active')) {
        activeContent.classList.remove('filter__content_active');
        item.classList.remove('filter__inner_active');
        activeContent.style.maxHeight = 0;
        svg.style.transform = "rotate(0deg)"
    } else {
        contents.forEach(element => {
            element.classList.remove('filter__content_active');
            element.style.maxHeight = 0;
            element.previousElementSibling.lastElementChild.style.transform = "rotate(0deg)";
            
        });

        titles.forEach(element => element.classList.remove('filter__inner_active'));
        svg.style.transform = "rotate(180deg)"
        item.classList.add('filter__inner_active');
        activeContent.classList.add('filter__content_active');
        filterWrap.style.maxHeight = activeContent.scrollHeight + filterWrap.scrollHeight + "px";
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}));



const isEmpty = () => {
    if (priceSortingHidden == null) {
        return
    } else {
        priceSortingHidden.style.maxHeight = "0px";
    }
}


isEmpty();
priceSortingVisible?.addEventListener("click", (e) => {
    e._clickPriceSorting = true;
    if (priceSortingHidden.style.maxHeight == "0px") {
        priceSortingHidden.classList.add("price-sorting__active")
        priceSortingHidden.style.maxHeight = priceSortingHidden.scrollHeight + "px";
    } else {
        priceSortingHidden.style.maxHeight = "0px";
    }

    document.addEventListener("click", (e) => {
        console.log(e._clickPriceSorting);

        console.log(e.target.classList.contains('price-sorting__visible'));



        if (e._clickPriceSorting == true ||
            e.composedPath().includes(priceSortingHidden) ||
            e.target.classList.contains('price-sorting__hidden')
        ) return
        priceSortingHidden.style.maxHeight = "0px";
    })
})





