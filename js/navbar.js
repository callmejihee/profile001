let navbar = document.querySelector('.nav__bar');
let navHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY >= 173){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});