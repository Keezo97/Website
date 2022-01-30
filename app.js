const burger = document.querySelector(".burger");
const menuList = document.querySelector(".page-menu_list");

const menuSlide = () =>{
    burger.addEventListener('click', () =>{
        console.log("click");
        menuList.classList.toggle("burger-active");
    })
}

menuSlide()