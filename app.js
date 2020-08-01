const myForm = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errors = document.querySelectorAll('.error');
const button = document.querySelector('.signup-btn-free');

const required = ['email', 'firstname', 'lastname', 'password'];

button.addEventListener('click', validation);


function validation(e) {
    let data = {};
    let validError = false;
    e.preventDefault();
    errors.forEach(function(item) {
        item.classList.add('hide');
    })

    inputs.forEach(function(el) {
        let tempName = el.getAttribute('name');
        if (tempName != null) {
            el.style.borderColor = '#ddd';
            if (el.value.length == 0 && required.includes(tempName)) {
                addError(el, 'Required Field', tempName);
                validError = true;
            }
            if (tempName == 'email') {
                let exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                let result = exp.test(el.value);
                if (!result) {

                    addError(el, 'Looks like this is not an email', tempName);
                    error = true;
                }
            }
            if (tempName == 'password') {
                let exp = /^([a-zA-Z0-9])+$/;
                let result = exp.test(el.value);
                if (!result) {

                    addError(el, 'cannot be empty', tempName);
                    error = true;
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, 'needs to be between 3 and 8 characters', tempName);
                    error = true;
                }
            }
            if (tempName == 'firstname') {
                let exp = /^([a-zA-Z])+$/;
                let result = exp.test(el.value);
                if (!result) {

                    addError(el, 'cannot be empty', tempName);
                    error = true;
                }

            }
            if (tempName == 'lastname') {
                let exp = /^([a-zA-Z])+$/;
                let result = exp.test(el.value);
                if (!result) {

                    addError(el, 'cannot be empty', tempName);
                    error = true;
                }

            }
            data[tempName] = el.value;
        }
    })

    if (!validError) {
        myForm.submit();
    }
}

function addError(el, mes, fieldName) {
    let temp = el.nextElementSibling;
    temp.classList.remove('hide');
    temp.textContent = fieldName + " " + mes;
    el.style.borderColor = 'red';
    el.style.borderWidth = '2px';
    el.focus();
}