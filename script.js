const menuMobile = document.querySelector(".menu-mobile");

const menu = document.querySelector("#menu_btn");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});

const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => {

    myObserver.observe(element);

});