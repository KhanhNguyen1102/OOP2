

function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.firstTop = this.top;
    this.firstLeft = this.left;
    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    // Di chuyển quanh màn hình = bàn phím
    // this.moveRight = function(){
    //     this.left += this.speed;
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    // }
    // this.moveDown = function(){
    //     this.top += this.speed;
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    // }
    // this.moveLeft = function(){
    //     this.left -= this.speed;
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    // }
    // this.moveUp = function(){
    //     this.top -= this.speed;
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    // }
    // Auto di chuyển quanh màn hình thì uncomment phần dưới , comment phần trên lại
    this.moveRight = function(){
        this.left += this.speed;
    }
    this.moveDown = function(){
        this.top += this.speed;
    }
    this.moveLeft = function(){
        this.left -= this.speed;
    }
    this.moveUp = function(){
        this.top -= this.speed;
    }

}

let hero = new Hero('aquarius.jpg', 20, 30, 200, 100);

// Auto di chuyển xung quanh màn hình
function start(){
    if((hero.left === hero.firstLeft) && (hero.top > hero.firstTop) ){
        hero.moveUp();
    }else if ((hero.left > window.innerWidth - hero.size) &&(hero.top<window.innerHeight-hero.size)){
        hero.moveDown();
    } else if ((hero.left < window.innerWidth - hero.size) && (hero.top <= hero.firstTop)){
        hero.moveRight();
    }else if (hero.top > window.innerHeight - hero.size){
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}
start();

// Di chuyển bằng phím
// function moveSelection(key) {
//     switch (key.keyCode) {
//         case 37:
//             hero.moveLeft();
//             break;
//         case 39:
//             hero.moveRight();
//             break;
//         case 38:
//             hero.moveUp();
//             break;
//         case 40:
//             hero.moveDown();
//             break;
//     }
// }
// function doReady() {
//     window.addEventListener('keydown', moveSelection);
// }
// document.getElementById('game').innerHTML = hero.getHeroElement();