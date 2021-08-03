
var pathImg
var jaxon, jaxon_run

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  jaxon_run = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,400,20,20)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale= 0.9

  jaxon = createSprite(200,300)
  jaxon.addAnimation("movement", jaxon_run)
  jaxon.scale = 0.05

  invisibleboundary1 = createSprite(400,200,155,400)
  invisibleboundary1.visible = false

  invisibleboundary2 = createSprite(0,200,165,400)
  invisibleboundary2.visible = false

  


}

function draw() {
  background("black")
  drawSprites()

  jaxon.x = mouseX

  if(path.y > 400) {
    path.y = height/2



  }

  jaxon.collide(invisibleboundary1)
  jaxon.collide(invisibleboundary2)

  

}
