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
        if (!nameRegex.test(firstName)) {
            console.log('Name must contain only alphabets.');
        } else {
            console.log('Good to go');
        }
    } else {
        console.log('Please fill this field');
    }
    if (lastName){
        if (!nameRegex.test(lastName)) {
            console.log('Name must contain only alphabets.');
        } else {
            console.log('Good to go');
        }
    } else {
        console.log('Please fill this field');
    }
    if (email){
        if (!mailRegex.test(email)) {
            console.log('Invalid Email Id');
        } else {
            console.log('Good to go');
        }
    } else {
        console.log('Please fill this field');
    }
    if (password){
        if (!pwdRegex.test(password)) {
            console.log('Invalid Password');
        } else {
            console.log('Good to go');
        }
    } else {
        console.log('Please fill in the password!');
    }
})