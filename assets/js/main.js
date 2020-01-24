//Открытие формы с названием кнопки
function initFormCall() {
    const trigger = document.querySelectorAll('.call-btn');
    for (let i = 0; i < trigger.length; ++i) {

        let item = trigger[i];

        function toggleCallBack() {
            document.querySelector('.contact-form__title').innerHTML = item.textContent;
            document.getElementById('client-name').value = '';
            document.getElementById('client-phone').value = '+375';
            document.getElementById('client-comment').value = '';

            formModal.classList.toggle('contact-form--visible');
            regModal.classList.remove('reg-form--visible');
            blur.classList.add('blur--active');
        }

        item.addEventListener('click', toggleCallBack);
    }

}
document.addEventListener('DOMContentLoaded', initFormCall);



const formModal = document.querySelector('.contact-form');
const buttonCall = document.querySelector('.contact-form__btn');

const thankModal = document.querySelector('.modal-thank');
const buttonOk = document.querySelector('.modal-thank__btn');

const blur = document.querySelector('.blur');
const outer = document.querySelector('#header');


//Закрытие на кнопку Х
const btnClose = document.querySelectorAll('.btn-close');
for (let i = 0; i < btnClose.length; ++i) {
    let closeItem = btnClose[i];
    function closeModal() {
        formModal.classList.remove('contact-form--visible'); //Форма
        thankModal.classList.remove('modal-thank--visible'); //Модалка сасибо
        regModal.classList.remove('reg-form--visible'); //Регистрация
        blur.classList.remove('blur--active');
    }
    closeItem.addEventListener('click', closeModal)
}

//Закрытие на внешнюю область и escape
function windowOnClick(event) {
    if (event.target === outer || event.code === 'Escape') {
        closeModal();
    }
}

const clientName = document.getElementById('client-name');


//Ввод только букв в поле имени
function replaceName (){
    clientName.value = clientName.value.replace(/[^a-zA-Zа-яА-Я]/,'');
}
clientName.addEventListener('input', replaceName);


//Вызов модалки после успешного заказа звонка
function reqCallBack(event){
    event.preventDefault();

    if (document.getElementById('client-name').value === '' ) {
        return document.getElementById('client-name').focus()
    } else {

        localStorage.name = document.getElementById('client-name').value;
        document.querySelector('#modal-thank__name').innerHTML = `,<br/>${localStorage.name}!`;
        formModal.classList.remove('contact-form--visible');
        thankModal.classList.toggle('modal-thank--visible');

        setTimeout(function(){
            closeModal();
        }, 2000);

    }
}



buttonCall.addEventListener('click', reqCallBack);

buttonOk.addEventListener('click', closeModal);

window.addEventListener('click', windowOnClick);
window.addEventListener('keydown', windowOnClick);


//Registration


const buttonReg = document.querySelector('.reg-btn');
const regModal = document.querySelector('.reg-form');

const buttonNext = document.querySelector('.reg-form__btn-next');
const buttonUp = document.querySelector('.reg-form__btn-up');

const buttonFinishReg = document.querySelector('.reg-form__btn');


function toggleReg() {

    //Clear input
    const fieldsReg = document.querySelectorAll('.reg-form__input');
    document.querySelector('.reg-form__about').value = '';

    for (let i = 0; i < fieldsReg.length; ++i) {
        fieldsReg[i].value = '';
    }

    regModal.classList.toggle('reg-form--visible');

    nextReg(fieldIndex = 1);
    for (let i = 1; i < Object.keys(nextField).length; ++i){
        nextField[0].classList.add('reg-form--active');
        nextField[i].classList.remove('reg-form--active');
    }


    formModal.classList.remove('contact-form--visible');

    blur.classList.add('blur--active');
    buttonNext.disabled = true;

    function statusButton () {

        if (loginField.value.length > 3 && passwordField.value.length > 5 && repPasswordField.value.length > 5) {
            if (passwordField.value.length === repPasswordField.value.length && passwordField.value === repPasswordField.value) {
                buttonNext.removeAttribute('disabled')
            }else {
                buttonNext.disabled = true;
            }
        }
    }

    const loginField = document.querySelector('input[name="login"]');
    const passwordField = document.querySelector('input[name="password"]');
    const repPasswordField = document.querySelector('input[name="rep-password"]');
    loginField.addEventListener('input', statusButton);
    passwordField.addEventListener('input', statusButton);
    repPasswordField.addEventListener('input', statusButton);

}

buttonReg.addEventListener('click', toggleReg);



const buttons = document.querySelectorAll('.next');
console.log(buttons);

const nextField = document.querySelectorAll('.reg-form fieldset');

let fieldIndex = 1;
function nextReg(n) {
    if (n > Object.keys(nextField).length) {
        fieldIndex = 1
    }
    if (n < 1) {
        fieldIndex = Object.keys(nextField).length
    }
    for (let i = 0; i < Object.keys(nextField).length; ++i){
        nextField[i].classList.remove('reg-form--active');
        console.log(nextField[i]);
    }
    nextField[fieldIndex - 1].classList.add('reg-form--active');
}


function nextRegField() {
    nextReg(fieldIndex += 1)
}
buttonNext.addEventListener('click', nextRegField);

function upReg() {

    if (document.getElementById('reg-name').value === '' ) {
        document.getElementById('reg-name').focus();
    } else {
        localStorage.regName = document.getElementById('reg-name').value;
        nextReg(fieldIndex += 1)
    }
}

buttonUp.addEventListener('click', upReg);



function finishReg(event) {
    event.preventDefault();
    document.querySelector('#modal-thank__name').innerHTML = `,<br/>${localStorage.regName}!`;
    regModal.classList.remove('reg-form--visible');
    thankModal.classList.toggle('modal-thank--visible');

    setTimeout(function(){
        closeModal();
    }, 2000);


}

buttonFinishReg.addEventListener('click', finishReg);