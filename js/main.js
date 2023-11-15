let mobile_menu = document.querySelector('.mobile_menu');
let bars = document.querySelector('header .bars');

if (bars) {
    bars.onclick = () => {
        mobile_menu.classList.toggle('active');
        bars.classList.toggle('active');
    }
}