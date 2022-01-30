// Burger

const burger = document.querySelector(".burger");
const menuList = document.querySelector(".page-menu_list");

const menuSlide = () =>{
    burger.addEventListener('click', () =>{
        console.log("click");
        menuList.classList.toggle("burger-active");
    })
}

menuSlide()

// Current Date

const date = document.querySelector(".date");
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

let currentDay = `${day}-${month}-${year}`;

date.innerText = currentDay;

