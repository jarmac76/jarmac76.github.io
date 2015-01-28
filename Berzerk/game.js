/**
 * Created by Jared on 1/28/2015.
 */
var dx = 5;
var dy = 5;
var x = 0;
var y = 0;
var e1x = 2;
var e1y = 2;
var e2x = 3;
var e2y = 3;
var ctx;
var WIDTH;
var HEIGHT;
var score = 0;
var direction = 3;
var keyPressed = false;
var currX = 0;
var currY = 0;
var levelUp = false;
var blink = false;



function init(){
    ctx = document.getElementById("level1").getContext("2d");
    WIDTH = ctx.canvas.width;
    HEIGHT = ctx.canvas.height;
    window.addEventListener('keydown', onKeyDown,true);
    window.addEventListener('keyup', onKeyUp,true);
    setInterval(draw, 10);
}

function resetGame(){
    if(levelUp == true){
        player.x = 20;
        player.y = 250;
        e1y = 5;
        e2y = 6;
        enemy1.visible = true;
        enemy2.visible = true;
        levelUp = false;
        enemy1.x = 375;
        enemy1.y = 0;
        enemy2.x = 200;
        enemy2.y = 0;
    }
    else {
        player.x = 20;
        player.y = 250;
        score = 0;
    }
}

//Player Image
var playerReady = false;
var playerMoveReady = false;
var playerImage= new Image();
var playerMoveImage = new Image();



function playerAssetReady(){
    playerReady = true;

};
playerImage.src = "images/AloneSPRhhX.png";

function playerImageMove(){
    playerMoveImage = true;
}
playerMoveImage.src = "images/playerMove.png";


//game entities
var player={
    speed: 100,
    width: 25,
    height: 48,
    x:20,
    y:250

};

var enemy1 = {
    speed: 300,
    width: 27,
    height: 27,
    x: 375,
    y: 0,
    visible: true

};

var enemy2 = {
    speed: 300,
    width: 27,
    height: 27,
    x: 500,
    y: 473,
    visible: true

};

var enemyImage = new Image();
var enemyImage2 = new Image();
var enemyReady = false;


function enemyAssetReady(){
    enemyReady = true;
}

enemyImage.src = "images/enemy.png";
enemyImage2.src = "images/enemynoeyes.png";

var laser = {
    speed:3000,
    width: 5,
    height: 1,
    visible: "false"
};

//detect a key event and if player is in bounds
function onKeyDown(evt){
    switch(evt.keyCode){

        // up arrow
        case 38:
            direction = 1;
            keyPressed = true;
            break;

        //Down arrow
        case 40:
            direction = 2;
            keyPressed = true;
            break;

        //left arrow
        case 37:
            direction = 3;
            keyPressed = true;
            break;

        //right arrow
        case 39:
            direction = 0;
            keyPressed = true;
            break;

        //space bar
        case 32:

            shoot();
            laser.visible = true;
    }
}

//sets keypressed to false if no key is pressed
function onKeyUp(){
    keyPressed = false;
}

//render level
function drawLevel1(){

    ctx.fillStyle="#0000FF";
    ctx.fillRect(300,0,30,150);
    ctx.fillRect(300,350,30,150);


    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,175,10,150);
    ctx.fillRect(690,175,10,150);
}

//render game entities
//draw player standing still
function drawPlayer(){
    ctx.drawImage(playerImage,player.x,player.y);
}

//draw player moving
function drawPlayerMove(){
    ctx.drawImage(playerMoveImage,currX, currY, 25, 48, player.x, player.y,25,48);
    currX += 26;
    if(currX >= 77){
        currX = 0;
    }
}


//draw enemies
function drawEnemy1(){
    if(blink == false) {
        ctx.drawImage(enemyImage, enemy1.x, enemy1.y);
        blink == true;
    }
    if(blink == true){
        ctx.drawImage(enemyImage2,enemy1.x, enemy1.y);
        blink == false;
    }
    if(enemy1.y + e1y < 0){
        e1y = -e1y;
    }
    if(enemy1.y + e1y > HEIGHT - enemy1.height){
        e1y = -e1y;
    }
    enemy1.y += e1y;

    if((laser.x + laser.width) + dx >= enemy1.x && laser.x + dx <= enemy1.x + enemy1.width
        && laser.y >= enemy1.y && laser.y <= enemy1.y + enemy1.height){
        enemy1.visible = false;
        score += 100;
        enemy1.x = 0;
        enemy1.y = 0;
    }
}

function drawEnemy2(){
    ctx.drawImage(enemyImage, enemy2.x, enemy2.y);

    if(enemy2.y + e2y < 0){
        e2y = -e2y;
    }
    if(enemy2.y + e2y > HEIGHT - enemy2.height){
        e2y = -e2y;
    }
    enemy2.y += e2y;

    if((laser.x + laser.width) + dx >= enemy2.x && laser.x + dx <= enemy2.x + enemy2.width
        && laser.y >= enemy2.y && laser.y <= enemy2.y + enemy2.height){
        enemy2.visible = false;
        score += 100;
        enemy2.x = 0;
        enemy2.y = 0
    }

}

//clear canvas
function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//draw laser
function drawLaser(){
    //if last direction was right arrow
    if(direction == 0) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
        if (laser.x + laser.width >= WIDTH) {
            laser.visible = false;
        }
        laser.x += dx;
    }

    //if last direction was up arrow
    if(direction == 1){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(laser.x, laser.y, laser.height, laser.width);
        if (laser.y  <= 0) {
            laser.visible = false;
        }
        laser.y -= dy;
    }

    //if last direction was down arrow
    if(direction == 2){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(laser.x, laser.y, laser.height, laser.width);
        if (laser.y + dy  >= HEIGHT - laser.height) {
            laser.visible = false;
        }
        laser.y += dy;
    }

    //if last direction was left arrow
    if(direction == 3) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
        if (laser.x  <= 0) {
            laser.visible = false;
        }
        laser.x -= dx;
    }
}

//display the score
function drawScore(x){
    ctx.font = "20px Impact";
    ctx.fillText ("Score:" + x, 20, 20);
}

//update the players movement
function updatePlayerMove(){
    var tempX = 0;
    var tempY = 0;
    switch(direction){

        case 0:
            if(player.x + dx < WIDTH - 25) {
                if(player.x + player.width + dx >= 690 && player.y + player.height + dy >= 175
                    && player.x + player.width + dx >= 690 && player.y + dy <= 325){
                    levelUp = true;
                    resetGame();
                }
                if (!(player.x + dx <= 330 && player.x + dx >= 275 && player.y + dy >= 310 || player.x + dx <= 330 && player.x + dx >= 275 && player.y + dy <= 150)) {
                    tempX = dx;
                }
            }
            break;

        case 1:
            if(player.y - dy > 0){
                if(!(player.x - dx >= 275 && player.x - dx <= 320 && player.y - dy <= 150)){
                    tempY = -dy;
                }
            }

            break;

        case 2:
            if(player.y + dy < HEIGHT - 48){
                if(!(player.x + dx >= 285 && player.x + dx <= 330 && player.y + dy >= 305)){
                    tempY = dy;

                }

            }

            break;

        case 3:
            if(player.x - dx > 0){
                if(!(player.x + dx >= 285 && player.x - dx <= 330 && player.y + dy >=310 || player.x + dx >= 285 && player.x - dx <= 330 && player.y + dy <= 150)){
                    tempX = -dx;
                }
            }

            break;
    }
    player.x += tempX;
    player.y += tempY;
}

//draws all the entities and score an checks if player touches enemy
function draw(){
    clear();
    drawLevel1();
    if(keyPressed == true){
        updatePlayerMove();
        drawPlayerMove();
    }
    else {
        drawPlayer();
    }
    drawScore(score);

    if(enemy1.visible == true) {
        drawEnemy1();
    }

    if(enemy2.visible == true) {
        drawEnemy2();
    }


    if(laser.visible == true){
        drawLaser();
    }

    if(player.x + player.width >= enemy1.x && player.x + player.width <= enemy1.x + enemy1.width
        && player.y + player.height >= enemy1.y && player.y  <= enemy1.y + enemy1.height
        || player.x + player.width >= enemy2.x && player.x + player.width <= enemy2.x + enemy2.width
        && player.y + player.height >= enemy2.y && player.y  <= enemy2.y + enemy2.height){
        resetGame();

    }
}

//fires the laser
function shoot(){
    if(laser.visible = true){
        laser.x = player.x + player.width;
        laser.y = player.y + player.height/2;
    }

}

