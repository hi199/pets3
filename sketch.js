//Create variables here
var dog, happyDog;
var database;
var gameState= Hungry;
var foodS, foodStock;
function preload()
{
NDOGImg=loadImage("images/dogImg1.png")
HDOGGOImg=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
foodStock=database.ref('food')
foodStock.on("value",readStock)
gameState=database.ref('food')
readState.on("value",readState)
dog=createSprite(250,200,30,40)
gameState=data.val;
dog.addImage(NDOGImg)
feed=createButton("Feed the dog"); feed.position(700,95); 
feed.mousePressed(feedDog); addFood=createButton("Add Food"); 
addFood.position(800,95); 
addFood.mousePressed(addFoods);
}


function draw() { 
  background(46,139,87); 
  foodObj.display(); 
  fedTime=database.ref('FeedTime');
  function update(State){
database.ref('/').update({
  gameState
})
  }
   fedTime.on("value",function(data){ 
     lastFed=data.val(); });
      fill(255,255,254); textSize(15);
       if(lastFed>=12){ text("Last Feed : "+ lastFed%12 + " PM", 350,30); }
       else if(lastFed==0){ text("Last Feed : 12 AM",350,30); }
       else{ text("Last Feed : "+ lastFed + " AM", 350,30); }
        drawSprites(); }
        function readStock(data){ 
          foodS=data.val(); foodObj.updateFoodStock(foodS); } 
          if (gameState!=Hungry){
            feed.hide();
            addfeed.hide();
            dog.remove();
          }
          else{
            feed.show();
            addfeed.show();
            dog.addImage(NDOGImg);
          }
          function  feedDog(){
             dog.addImage(happyDog); 
             foodObj.updateFoodStock(foodObj.getFoodStock()-1); 
             database.ref('/').update({ Food:foodObj.getFoodStock(), 
              FeedTime:hour() }) }           function addFoods(){
              foodS++; database.ref('/').update({ Food:foodS }) }