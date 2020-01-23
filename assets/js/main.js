
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
const buttonClose = document.querySelector('.contact-form__close');
const buttonCall = document.querySelector('.contact-form__btn');

const buttonCloseThank = document.querySelector('.modal-thank__close');
const thankModal = document.querySelector('.modal-thank');
const buttonOk = document.querySelector('.modal-thank__btn');

const blur = document.querySelector('.blur');
const outer = document.querySelector('#header');


//Закрытие на кнопку Х
function closeModal() {
    formModal.classList.remove('contact-form--visible'); //Форма
    thankModal.classList.remove('modal-thank--visible'); //Модалка сасибо
    regModal.classList.remove('reg-form--visible'); //Регистрация
    blur.classList.remove('blur--active');
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

buttonClose.addEventListener('click', closeModal);
buttonCloseThank.addEventListener('click', closeModal);
buttonOk.addEventListener('click', closeModal);

window.addEventListener('click', windowOnClick);
window.addEventListener('keydown', windowOnClick);


//Registration

const buttonReg = document.querySelector('.reg-btn');
const regModal = document.querySelector('.reg-form');

const headReg = document.querySelector('.reg-form__head');
const infoReg = document.querySelector('.reg-form__client-info');
const otherReg = document.querySelector('.reg-form__client-other');

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

    headReg.classList.add('reg-form__head--active');
    regModal.classList.toggle('reg-form--visible');
    infoReg.classList.remove('reg-form__client-info--active');
    otherReg.classList.remove('reg-form__client-other--active');
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



function nextReg(event) {
    event.preventDefault();
    headReg.classList.remove('reg-form__head--active');
    infoReg.classList.add('reg-form__client-info--active')
}

buttonNext.addEventListener('click', nextReg);

function upReg(event) {
    event.preventDefault();
    if (document.getElementById('reg-name').value === '' ) {
        document.getElementById('reg-name').focus();
    } else {
        localStorage.regName = document.getElementById('reg-name').value;
        infoReg.classList.remove('reg-form__client-info--active');
        otherReg.classList.add('reg-form__client-other--active');
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