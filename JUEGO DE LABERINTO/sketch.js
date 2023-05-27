var player;

function preload (){

}

function setup (){
    canvas = createCanvas (400,400);
    player = createSprite (200,200, 15,15);
    player.shapeColor="blue";

}

function draw (){
    background ("grey");

    
    
   if (keyIsDown("UP_ARROW")){
player.Y = player.Y -5;
   }

   if(keyIsDown("DOWN_ARROW")){
player.Y = player.Y +5;
   }

   drawSprites ();
}