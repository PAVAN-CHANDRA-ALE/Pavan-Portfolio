const menuIcon = document.getElementById('menuIcon');
const menuLinks = document.getElementById('menuLinks');

function toggleMenu(){
    // console.log("Hi Pavan");
    if(menuLinks.style.display == 'none')
    {
        menuLinks.style.display='block';
        menuIcon.innerHTML = '<img src="./images/cross img.png" height="40px" alt="Hi">';
    }else{
        menuLinks.style.display='none';
        menuIcon.innerHTML = '<i class="ri-menu-3-fill">';
   
    }
};