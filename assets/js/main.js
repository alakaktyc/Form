const trigger = document.querySelector('.call-btn');

const modal = document.querySelector('.contact-form');
const closeButton = document.querySelector('.close');
const callButton = document.querySelector('.contact-form__btn');

const closeThankButton = document.querySelector('.modal-thank__close');
const thankModal = document.querySelector('.modal-thank');
const okButton = document.querySelector('.modal-thank__btn');

const blur = document.querySelector('.blur');


function toggleModal() {
    modal.classList.toggle('show-form');
    blur.style.visibility = 'visible';
}
function closeModal() {
    modal.classList.remove('show-form');
    thankModal.classList.remove('show-modal');
    blur.style.visibility = 'hidden';
}

function windowOnClick(event) {
    if (event.target === blur) {
        modal.classList.remove('show-form');
        thankModal.classList.remove('show-modal');
        blur.style.visibility = 'hidden';
    }
}

function reqCallBack(){
    localStorage.name = document.getElementById('client-name').value;
    document.querySelector('#modal-thank__name').innerHTML = ', ' + localStorage.name + '!';
    modal.classList.remove('show-form');
    thankModal.classList.toggle('show-modal');
    windowOnClick();
}



callButton.addEventListener('click', reqCallBack);
trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', closeModal);
closeThankButton.addEventListener('click', closeModal);
okButton.addEventListener('click', closeModal);
window.addEventListener('click', windowOnClick);



