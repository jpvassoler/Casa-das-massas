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

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });
});