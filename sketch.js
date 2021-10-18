var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario, mario_running, mario_collided;
var ground, invisibleGround, groundImage;

var bricksGroup, brickImage, obstaclesImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;
var jumpSound, checkpointSound, dieSound;
var gameOver, restart, gameOverImg, restartImg;

function preload()
{
    bg = loadImage("bg.png");
    mario_running = loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
    mario_collided = loadImage("collided.png");
    brickImage = loadImage("brick.png");
    obstaclesImage = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
    groundImage = loadImage("ground2.png");

    dieSound = loadSound("die.mp3");
    jumpSound = loadSound("jump.mp3");
    checkpointSound = loadSound("checkPoint.mp3");
}

function setup()
{
    createCanvas(600,350);

    mario = createSprite(50,295,20,50);
    mario.addAnimation("running",mario_running);
    mario.addImage("collided",mario_collided);
    mario.scale = 2;
    mario.debug = true;

    ground = createSprite(200,330,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width/2;
    ground.velocityX = -2;

}

