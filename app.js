let x = 0;
let y = 0;

const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;

function setup(){
    console.log('In setup')
createCanvas(500, 500)

}
function draw(){
    //console.log('In draw');
    background ("orange")
    rect(x, y, 50, 50)
}
console.log("Out in the open");

function keyPressed (){
if (keyCode === ARROW_LEFT) {
    x -= 50;
}else if (keyCode === ARROW_DOWN) {
    y += 50;
}else if (keyCode === ARROW_UP) {
    y -= 50;
}else if (keyCode === ARROW_RIGHT) {
 x += 50;


}


//     console.log(keyCode)
// if (keyCode=== 32){
//     y+=50
// }

}