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

let pos = document.querySelector(element).offsetTop;
if ('scrollBehavior' in document.documentElement.style) { //Checks if browser supports scroll function
    window.scroll({
        top : pos,
        left : 0,
        behavior : 'smooth'
    });
} else {
    smoothScrollTo(0, pos, 500); //polyfill below
}




window.smoothScrollTo = function(endX, endY, duration) {
        let startX = window.scrollX || window.pageXOffset,
        startY = window.scrollY || window.pageYOffset,
        distanceX = endX - startX,
        distanceY = endY - startY,
        startTime = new Date().getTime();

        // Easing function
        let easeInOutQuart = function(time, from, distance, duration) {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };

        let timer = window.setInterval(function() {
            let time = new Date().getTime() - startTime,
            newX = easeInOutQuart(time, startX, distanceX, duration),
            newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                window.clearInterval(timer);
            }
            window.scrollTo(newX, newY);
        }, 1000 / 60); // 60 fps
    };
