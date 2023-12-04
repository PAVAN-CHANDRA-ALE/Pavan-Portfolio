const menuIcon = document.getElementById('menuIcon');
const menuLinks = document.getElementById('menuLinks');

function toggleMenu(){
    // console.log("Hi Pavan");
    if(menuLinks.style.display == 'none')
    {
        menuIcon.innerHTML = '<img src="./images/cross img.png" height="40px" alt="Hi">';
        menuLinks.style.display='block';
    }else{
        menuLinks.style.display='none';
        menuIcon.innerHTML = '<i class="ri-menu-3-fill">';
   
    }
};
