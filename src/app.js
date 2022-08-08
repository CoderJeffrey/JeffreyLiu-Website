const hamburger_button = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')


function toggleButton(){
    navList.classList.toggle('show')
}

hamburger_button.addEventListener('click', toggleButton)