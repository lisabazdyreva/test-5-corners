const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPhone = document.querySelector("#phone");
const inputMail = document.querySelector("#email");
const inputAddress = document.querySelector("#address");

const buttonPost = document.querySelector('.form-order__btn');

const userForm = document.querySelector('.user-form');
const orderForm = document.querySelector('.form-order');

const containerNameCaption = inputName.parentElement.children[2];
const containerSurnameCaption = inputSurname.parentElement.children[2];
const containerPhoneCaption = inputPhone.parentElement.children[2];
const containerMailCaption = inputMail.parentElement.children[2];
const containerAddressCaption = inputAddress.parentElement.children[2];

inputPhone.setCustomValidity('Номер формата: +79091234567');

containerNameCaption.innerHTML = inputName.validationMessage;
containerSurnameCaption.innerHTML = inputSurname.validationMessage;
containerPhoneCaption.innerHTML = inputPhone.validationMessage;
containerMailCaption.innerHTML = inputMail.validationMessage;
containerAddressCaption.innerHTML = inputAddress.validationMessage;

let isPhoneValid = false;


const inputHandler = (evt) => {
  const filledClass = 'user-form__input--filled';
  if (evt.target.value !== '') {
    evt.target.classList.add(filledClass);
  } else {
    evt.target.classList.remove(filledClass);
  }

  const captionContainer = evt.target.parentElement.children[2];

  // if (evt.target === inputPhone) {
  //   evt.target.setCustomValidity('Номер формата: +79091234567');
  // }

  if (evt.target === inputPhone) {
    isPhoneValid = false;
    if (evt.target.value.match('\\+7\\s?[\\(]{0,1}9[0-9]{2}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2}')) {
      isPhoneValid = true;
    }
  }
  captionContainer.innerHTML = evt.target.validationMessage;

  if (inputName.value !== "" && inputSurname.value !== "" && isPhoneValid && inputMail.value !== "" && inputAddress.value !== "") {
    buttonPost.disabled = false;
  }
};

inputName.addEventListener('change', inputHandler);
inputSurname.addEventListener('change', inputHandler);
inputPhone.addEventListener('change', inputHandler);
inputMail.addEventListener('change', inputHandler);
inputAddress.addEventListener('change', inputHandler);


orderForm.addEventListener('submit', () => {

});
