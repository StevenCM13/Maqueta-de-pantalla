let botonmenu = document.getElementById('boton-menu');
let mainnav = document.getElementById('main-nav');
botonmenu.addEventListener('click', function(){
  mainnav.classList.toggle('mostrar');
});
