// Get DOM object
const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab-item');
const tabSpace = document.getElementById('tab');

// Add event listener
const showTab1 = () => {
    tabSpace.innerHTML = '';
    tabSpace.append(tabs[0]);
    tabButtons[0].classList.add('underline');
    tabButtons[1].classList.remove('underline');
    tabButtons[2].classList.remove('underline');
    tabButtons[3].classList.remove('underline');
}
const showTab2 = () => {
    tabSpace.innerHTML = '';
    tabSpace.append(tabs[1]);
    tabButtons[0].classList.remove('underline');
    tabButtons[1].classList.add('underline');
    tabButtons[2].classList.remove('underline');
    tabButtons[3].classList.remove('underline');
}
const showTab3 = () => {
    tabSpace.innerHTML = '';
    tabSpace.append(tabs[2]);
    tabButtons[0].classList.remove('underline');
    tabButtons[1].classList.remove('underline');
    tabButtons[2].classList.add('underline');
    tabButtons[3].classList.remove('underline');
}
const showTab4 = () => {
    tabSpace.innerHTML = '';
    tabSpace.append(tabs[3]);
    tabButtons[0].classList.remove('underline');
    tabButtons[1].classList.remove('underline');
    tabButtons[2].classList.remove('underline');
    tabButtons[3].classList.add('underline');
}

tabButtons[0].addEventListener('click', showTab1);
tabButtons[1].addEventListener('click', showTab2);
tabButtons[2].addEventListener('click', showTab3);
tabButtons[3].addEventListener('click', showTab4);

// Initial state of index page
showTab1();
