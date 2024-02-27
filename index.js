let formData = document.querySelector('.form');
let submitButton = document.querySelector('.button');
let errorMessages = document.querySelectorAll('.error-message');
let emptyMessages = document.querySelectorAll('.empty-field');
let showPasswordBtn = document.querySelector('.btn');
let fnTarget, lnTarget, emailTarget, pwdTarget;
let visBtn = showPasswordBtn.children[0];
let firstName, lastName, email, password;
let field;
let fnFlag, lnFlag, eFlag, pFlag;

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
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
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
            fnTarget.classList.add('error');
            errorMessages[0].classList.remove('d-none');
            fnFlag = false;
        } else {
            errorMessages[0].classList.add('d-none');
            fnFlag = true;
        }
    } else {
        emptyMessages[0].classList.remove("d-none");
        fnFlag = false;
    }
    if (lastName){
        emptyMessages[1].classList.add("d-none");
        if (!nameRegex.test(lastName)) {
            lnTarget.classList.add('error');
            errorMessages[1].classList.remove('d-none');
            lnFlag = false;
        } else {
            errorMessages[1].classList.add('d-none');
            lnFlag = true;
        }
    } else {
        emptyMessages[1].classList.remove("d-none");
        lnFlag = false;
    }
    if (email){
        emptyMessages[2].classList.add("d-none");
        if (!mailRegex.test(email)) {
            emailTarget.classList.add('error');
            errorMessages[2].classList.remove('d-none');
            eFlag = false;
        } else {
            errorMessages[2].classList.add('d-none');
            eFlag = true;
        }
    } else {
        emptyMessages[2].classList.remove("d-none");
        eFlag = false; 
    }
    if (password){
        emptyMessages[3].classList.add("d-none");
        if (!pwdRegex.test(password)) {
            pwdTarget.classList.add('error');
            errorMessages[3].classList.remove('d-none');
            pFlag = false;
        } else {
            errorMessages[3].classList.add('d-none');
            pFlag = true;
        }
    } else {
        emptyMessages[3].classList.remove("d-none");
        pFlag = false;
    }

    if (fnFlag && lnFlag && eFlag && pFlag){
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = '';
        visBtn.innerHTML = 'visibility';
        window.location.href = '/success.html';
    }
});

showPasswordBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(pwdTarget.getAttribute('type') === 'password'){
        visBtn.innerHTML = 'visibility_off';
        pwdTarget.setAttribute('type', 'text');
    } else {
        visBtn.innerHTML = 'visibility';
        pwdTarget.setAttribute('type', 'password');
    }
});