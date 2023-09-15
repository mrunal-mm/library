function openModal(){
    mainSection.classList.add('main-before');
    navbar.classList.add('nav-before');
    modal.style.display = "flex";
}

function closeModal(){
    mainSection.classList.remove('main-before');
    navbar.classList.remove('nav-before');
    modal.style.display = "none";
}

const modal = document.querySelector('.modal');
const mainSection = document.querySelector('main');
const navbar = document.querySelector('nav');

const addBookButton = document.querySelector('#add-book')
addBookButton.addEventListener('click', openModal);

const closeModalButton = document.querySelector('#close');
closeModalButton.addEventListener('click', closeModal);
