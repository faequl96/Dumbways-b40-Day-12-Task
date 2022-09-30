const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector("button");


email.addEventListener('click', function() {
    
    email.classList.add('pin');
    email.removeAttribute('placeholder');
    if(password.classList.contains('pin') && password.value == "") {
        password.placeholder = '* Password wajib diinput';
        password.style.border = '2px solid red';
    }

    email.addEventListener('input', function() {
        if(email.value == "") {
            email.style.border = '2px solid red';
            button.style.backgroundColor = '#ccc';
            button.style.cursor = 'default';
        } else{
            email.style.border = '2px solid rgba(0,0,0,0)';
            email.classList.remove('pin');
            if(email.value != "" && password.value != "") {
                button.style.backgroundColor = '#000';
                button.style.cursor = 'pointer';
            }
        }
    })
})


password.addEventListener('click', function() {
    
    password.classList.add('pin');
    password.removeAttribute('placeholder');
    if(email.classList.contains('pin') && email.value == "") {
        email.placeholder = '* Email wajib diinput';
        email.style.border = '2px solid red';
    }
    
    password.addEventListener('input', function() {
        if(password.value == "") {
            password.style.border = '2px solid red';
            button.style.backgroundColor = '#ccc';
            button.style.cursor = 'default';
        } else{
            password.style.border = '2px solid rgba(0,0,0,0)';
            password.classList.remove('pin');
            if(email.value != "" && password.value != "") {
                button.style.backgroundColor = '#000';
                button.style.cursor = 'pointer';
            }
        }
    })
})