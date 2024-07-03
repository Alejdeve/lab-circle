const nombre = document.querySelector("#fname");
console.log(nombre.value);

/*  
    1º Declarar las variables y hacer que referencien a los inputs
    2º Declarar la función que se lanzará cuando se haga el submit (pruébala primero con un console.log)
    3º Hacer un console.log de variables.value
*/

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById('#fname');
    const emailInput = document.getElementById('#email');
    const phoneInput = document.getElementById('#phone');
    const messageInput = document.getElementById('#message');

    const nameError = document.getElementById('#fname-error');
    const mailError = document.getElementById('#email-error');
    const phoneError = document.getElementById('#phone-error');
    const messageError = document.getElementById('#message-error');

    function validateName() {
        if (!nameInput.value) {
          nameError.innerText = "Debes introducir un nombre";
          nameInput.style.borderColor = "red";
        } else {
          nameError.innerText = "";
          nameInput.style.borderColor = "";
        }
      }
    
      function validateMail() {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailInput.value) {
          mailError.innerText = "Debes introducir un e-mail";
          emailInput.style.borderColor = "red";
        } else if (!regex.test(email.value)) {
          mailError.innerText = "Debes introducir un e-mail válido";
          emailInput.style.borderColor = "red";
        } else {
          mailError.innerText = "";
          emailInput.style.borderColor = "";
        }
      }
    
      function validatePhone() {
        if (!phoneInput.value) {
          phoneError.innerText = "Debes introducir tu nº de teléfono";
          phoneInput.style.borderColor = "red";
        } else {
          phoneError.innerText = "";
          phoneInput.style.borderColor = "";
        }
      }
    
      function validateMsg() {
        if (messageInput.value.length < 5) {
          messageError.innerText = "El mensaje debe tener al menos 5 caracteres";
          messageInput.style.borderColor = "red";
        } else {
          messageError.innerText = "";
          messageInput.style.borderColor = "";
        }
      }
    
      fullName.addEventListener("input", validateName);
      email.addEventListener("input", validateMail);
      phone.addEventListener("input", validatePhone);
      message.addEventListener("input", validateMsg);
    
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateName();
        validateMail();
        validatePhone();
        validateMsg();
    
        if (
          !nameError.innerText &&
          !mailError.innerText &&
          !phoneError.innerText &&
          !messageError.innerText
        ) {
          console.log(`
          Client's name: ${nameInput.value}
          Client's email: ${emailInput.value}
          Client's phone: ${phoneInput.value}
          Client's message: ${messageInput.value}`);
        }
      });
    });

