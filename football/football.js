const field = document.querySelector('#field')
const ball = document.querySelector('#ball')
const widthBallHalf = ball.width / 2;
const heightBallHalf = ball.height / 2;
console.log(widthBallHalf);
console.log(heightBallHalf);
const fieldSizeY = field.clientHeight;
const fieldSizeX = field.clientWidth;
console.dir(field);
console.log(fieldSizeY);
console.log(fieldSizeX);
// const mouseMove = field.addEventListener('mousemove', (event) => console.table(event));
const onMouseClick = field.addEventListener('click', (event) => coordinatesOfMouse(event));

function coordinatesOfMouse(event) {
    let ballX = 0;
    let ballY = 0;
    // console.table(event);
    console.log(event.offsetX);
    console.log(event.offsetY);
    if (event.offsetX < widthBallHalf) {
        ballX = widthBallHalf;
    }else if (event.offsetX > fieldSizeX - widthBallHalf) {
        ballX = fieldSizeX - widthBallHalf;
    }else{
        ballX = event.offsetX
    };
    if (event.offsetY < heightBallHalf) {
        ballY = heightBallHalf;
    }else if (event.offsetY > fieldSizeY - heightBallHalf) {
        ballY = fieldSizeY - heightBallHalf;
    }else{
        ballY = event.offsetY;
    }
    // let ballX = event.offsetX < widthBallHalf || event.offsetX > fieldSizeX - widthBallHalf ? widthBallHalf : event.offsetX;
    // let ballY = event.offsetY < heightBallHalf ? heightBallHalf : event.offsetY;
    
    
    ball.setAttribute('style', `top: ${ballY}px;
                                 left: ${ballX}px;
                                transform: translate(-50%, -50%)`)
    
}
