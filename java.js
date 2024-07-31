let menu=document.querySelector('#menu-icon');

let navmenu=document.querySelector('.nav-menu');
menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

} 
document.addEventListener('DOMContentLoaded', () => {
    const shopNowButton = document.querySelector('.main-btn');
    const trendingSection = document.querySelector('#trending');

    shopNowButton.addEventListener('click', (event) => {
        // Prevent the default anchor link behavior
        event.preventDefault();

        // Scroll to the trending section
        trendingSection.scrollIntoView({ behavior: 'smooth' });
    });
});
