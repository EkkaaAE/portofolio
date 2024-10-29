const buttonContact = document.getElementById('buttonContact');
const contactSection = document.getElementById('contact');
const exitButton = document.getElementById('exit');

buttonContact.addEventListener('click', () => {
    contactSection.classList.remove('hide');
    contactSection.classList.add('show');
});

exitButton.addEventListener('click', () => {
    contactSection.classList.remove('show');
    contactSection.classList.add('hide');
});
