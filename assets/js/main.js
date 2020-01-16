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
    formModal.classList.remove('contact-form--visible');
    thankModal.classList.remove('modal-thank--visible');
    blur.classList.remove('blur--active');
}


function windowOnClick(event) {
    if (event.target === outer || event.keyCode === 27) {
        closeModal();
    }
}

function windowKeyPress(event) {
    if (event.code === 'Escape') {
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
window.addEventListener('keydown', windowKeyPress);


