const emailSubmit = document.getElementById('subscribeButton')
const emailForm = document.getElementById('emailInput')

let isClicked = false;

emailSubmit.addEventListener('click', (e) =>{
    if (emailForm.value === ""){
        e.preventDefault()
        alert("Please input your email address")
    }
    else{
        alert("Thank you for your patronage!")
    }
})

emailSubmit.addEventListener('mouseover', (e) =>{
    emailSubmit.style.backgroundColor = "#19645F"
    emailSubmit.style.color = "white"
})


emailSubmit.addEventListener('mouseleave', (e) =>{
    emailSubmit.style.backgroundColor = "white"
    emailSubmit.style.color = "#19645F"
})

emailSubmit.addEventListener('transitionend', () => {
    emailSubmit.classList.remove('clicked');
});

