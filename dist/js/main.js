//Jquery
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menubranding = document.querySelector('.menu-brandig');

// this will bring all above class and but in nav-item

const navItems = document.querySelectorAll('.nav-item');

// 

let showMenu = false;

menubtn.addEventListener('click',toggleMenu);


    function toggleMenu(){

    if(!showMenu){  // if the menu over lay not showing

        menubtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menubranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

          
           showMenu = true;

    } 
         
               // return to home page
 
        else {

            menubtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menubranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));
            showMenu=false;
       
     }
}

