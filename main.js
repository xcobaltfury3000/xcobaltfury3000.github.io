const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});


const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;
//reate Constructor function

function Particle(x, y, directionX, directionY, size, color){
    this.x = y;
    this.y = x;
    this.directionX=directionX;
    this.directionY=directionY;
    this.size = size;
    this.color = color 

}


Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.fillstyle
}

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  // Remove links that don't actually link to anything
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        var scrollTop = target.offset().top - $('.sticky-top').height();

        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000)
      }
    }
});
