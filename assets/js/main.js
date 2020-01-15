const trigger = document.querySelectorAll('.call-btn');

for (let i = 0; i < trigger.length; ++i) {

    let item = trigger[i];

    function toggleModal() {
        document.querySelector('.contact-form__title').innerHTML = item.textContent;
        formModal.classList.toggle('contact-form--visible');
        blur.style.visibility = 'visible';
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





function removeModify() {
    formModal.classList.remove('contact-form--visible');
    thankModal.classList.remove('modal-thank--visible');
}

function closeModal() {
    removeModify();
    blur.style.visibility = 'hidden';
}

function windowOnClick(event) {
    if (event.target === blur) {
        removeModify();
        blur.style.visibility = 'hidden';
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
        windowOnClick(event);
    }
}



buttonCall.addEventListener('click', reqCallBack);

buttonClose.addEventListener('click', closeModal);
buttonCloseThank.addEventListener('click', closeModal);
buttonOk.addEventListener('click', closeModal);
window.addEventListener('click', windowOnClick);



