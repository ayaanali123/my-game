var gamestate = 0


function preload()
{
    pikachuImage=loadAnimation( "pikachu-fsprite.png")
	eeveeImage=loadAnimation( "eeveebacksprite.png")
	bgImage=loadImage( "battlebg.png")
	bgImage2=loadImage( "pokemonlogo.png")
	attackImage=loadImage( "attack.png")

}

function setup() {
	createCanvas(600, 600);

    bg = createSprite(300,300,600,600)
	bg.addImage(bgImage2)
    bg.scale = 2.5


	fpikachu=createSprite(500,230)
	fpikachu.scale = 3
	fpikachu.addAnimation("pikachu",pikachuImage)
	fpikachu.visible = false

	eevee=createSprite(200,500)
	eevee.scale = 3
	eevee.addAnimation("eevee",eeveeImage)
	eevee.visible = false

	attack = createSprite(400,500,50,50)
	attack.addImage(attackImage)
    attack.scale = 0.5
	attack.visible = false

}


function draw() {
 
  background(0);
  
  if(keyDown("space")){
	  gamestate = 1
  }
  if(gamestate===1){

	
	bg.addImage(bgImage)
	fpikachu.visible = true
	eevee.visible = true
	attack.visible = true
	attack.depth = bg.depth+1

	if(mousePressedOver(attack)){
		eevee.velocityX = eevee.velocityX + 3
		eevee.velocityY = eevee.velocityY - 3
	}
	if(eevee.isTouching(fpikachu)){
		visibility = visibility - 2
		tint(255,visibility)
		image(attackImage)
	}
  }

  drawSprites();
 
}



