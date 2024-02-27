let formData = document.querySelector('.form');
let submitButton = document.querySelector('.button');
let errorMessages = document.querySelectorAll('.error-message');
let emptyMessages = document.querySelectorAll('.empty-field');
let firstName, lastName, email, password;
let field;

let nameRegex = /^[a-z]+$/i;
let mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages) {
    console.log(errorMessage);
    errorMessage.classList.add("d-none");
}
for (let emptyMessage of emptyMessages) {
    emptyMessage.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field) {
        case "firstName":
            firstName = event.target.value;
            break;
        case "lastName":
            lastName = event.target.value;
            break;
        case "email":
            email = event.target.value;
            break;
        case "password":
            password = event.target.value;
            break;
        default:
            firstName = lastName = email = password = '';
            break;
    }
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    if (firstName){
        emptyMessages[0].classList.add("d-none");
        if (!nameRegex.test(firstName)) {
            errorMessages[0].classList.remove('d-none');
        } else {
            errorMessages[0].classList.add('d-none');
        }
    } else {
        emptyMessages[0].classList.remove("d-none");
        console.log('Please fill this field');
    }
    if (lastName){
        emptyMessages[1].classList.add("d-none");
        if (!nameRegex.test(lastName)) {
            errorMessages[1].classList.remove('d-none');
        } else {
            errorMessages[1].classList.add('d-none');
        }
    } else {
        emptyMessages[1].classList.remove("d-none");
    }
    if (email){
        emptyMessages[2].classList.add("d-none");
        if (!mailRegex.test(email)) {
            errorMessages[2].classList.remove('d-none');
        } else {
            errorMessages[2].classList.add('d-none');
        }
    } else {
        emptyMessages[2].classList.remove("d-none");
    }
    if (password){
        emptyMessages[3].classList.add("d-none");
        if (!pwdRegex.test(password)) {
            errorMessages[3].classList.remove('d-none');
            console.log('Invalid Password');
        } else {
            errorMessages[3].classList.add('d-none');
        }
    } else {
        emptyMessages[3].classList.remove("d-none");
    }
})