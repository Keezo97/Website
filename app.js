const scrollPage = () =>{
    const content = document.getElementById("content");
    const scrollButton = document.getElementById("scrollPage")
    if(content && scrollButton){
    scrollButton.addEventListener("click", ()=>{
        content.scrollIntoView({
            behavior: 'smooth',
        });
    })}
}

scrollPage();

const plusMinus = () =>{
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const cost = document.querySelector(".cost");
    const peopleAmount = document.querySelector(".peopleAmount");
    
    if(plus && minus) {
        plus.addEventListener('click', () =>{
            let text = parseInt(peopleAmount.textContent);
            if(text < 5) {
                text = text + 1;
                peopleAmount.innerText = text;
                cost.innerText = `€${text * 2300}`;
            }
        })
        minus.addEventListener('click', () =>{
            let text = parseInt(peopleAmount.textContent);
            if (text > 1){
                text = text - 1;
                peopleAmount.innerText = text;
                cost.innerText = `€${text * 2300}`;
            }
    })
}
}

plusMinus();

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

//Slider
let elem = document.querySelector('.opinions-wrapper');
let flkty = new Flickity( elem, {
  cellAlign: 'center',
  contain: true
});

//Form validation
const valid = () =>{
    const nam = document.getElementById("name"); 
    const email = document.getElementById("email"); 
    const number = document.getElementById("number"); 
    const form = document.getElementById("form"); 
    const messageArea = document.getElementById("messageArea");
    const errorText = document.getElementById("errorText");

    if(form) {
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            let messages = [];
            if(nam.value === '' || nam.value == null) {
                messages.push('Imie jest wymagane')
            }
            
            if(email.value.indexOf("@") === -1 ) {
                messages.push('Email nieprawidłowy')
            }

            if(number.value.length != 9) {
                messages.push('Numer nieprawidłowy')
            }

            if (messages.length > 0) {
                errorText.style.color = "red";
                errorText.innerText = messages.join(", ");
            }
            else {
                errorText.style.color = "green"
                errorText.innerText = "Wiadomość została wysłana";
                nam.value = '';
                email.value = '';
                number.value = '';
                messageArea.value = '';  
            }
    })}
}

valid()
