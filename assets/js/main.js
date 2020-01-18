//CallBack
const trigger = document.querySelectorAll('.call-btn');

for (let i = 0; i < trigger.length; ++i) {

    let item = trigger[i];

    function toggleModal() {
        document.querySelector('.contact-form__title').innerHTML = item.textContent;
        document.getElementById('client-name').value = '';
        formModal.classList.toggle('contact-form--visible');
        blur.classList.add('blur--active');
    }

    item.addEventListener('click', toggleModal);
}



const formModal = document.querySelector('.contact-form');
const buttonClose = document.querySelector('.contact-form__close');
const buttonCall = document.querySelector('.contact-form__btn');

const buttonCloseThank = document.querySelector('.modal-thank__close');
const thankModal = document.querySelector('.modal-thank');
const buttonOk = document.querySelector('.modal-thank__btn');


const blur = document.querySelector('.blur');
const outer = document.querySelector('#header');




function closeModal() {
    formModal.classList.remove('contact-form--visible'); //Форма
    thankModal.classList.remove('modal-thank--visible'); //Модалка сасибо
    regModal.classList.remove('reg-form--visible'); //Регистрация
    blur.classList.remove('blur--active');
}


function windowOnClick(event) {
    if (event.target === outer || event.code === 'Escape') {
        closeModal();
    }
}


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

        windowOnClick(event);
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

//Функция вызова главного окна
function toggleReg() {

    headReg.classList.add('reg-form__head--active');

    regModal.classList.toggle('reg-form--visible');
    blur.classList.add('blur--active');
    window.addEventListener('input', buttonStatus);

}

function buttonStatus() {
    if (document.querySelector('#reg-login').value.length === 0 && document.querySelector('#reg-password').value.length === 0 && document.querySelector('#reg-password-repeat').length === 0){
        return buttonNext.disabled = true;
    } else {
        buttonNext.disabled = false;
    }
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
    infoReg.classList.remove('reg-form__client-info--active');
    otherReg.classList.add('reg-form__client-other--active');
}

buttonUp.addEventListener('click', upReg);

