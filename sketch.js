//creating variable for car sprite
var car1, car2, car3, car4 ;

//creating variable for wall sprite
var wall1, wall2, wall3, wall4 ;

//creating variable for speed and weight
var speed, speed2, speed3, speed4, weight, weight2, weight3, weight4 ;

//creating the deformation variable so value could be calculated
var deformation1 , deformation2 , deformation3 , deformation4 ;

function setup() {
  //creating canvas
  createCanvas(1800,400);
  
  //creating the car sprites
  car1 = createSprite(30, 50, 40, 20);
  car1.shapeColor="white";
  car1.velocityX=2;

  car2 = createSprite(30, 150, 40, 20);
  car2.shapeColor="white";
  car2.velocityX=2;

  car3 = createSprite(30, 250, 40, 20);
  car3.shapeColor="white";
  car3.velocityX=2;

  car4 = createSprite(30, 350, 40, 20);
  car4.shapeColor="white";
  car4.velocityX=2;

  //creating the wall sprites
  wall1 = createSprite(1570,50,10,height/6);
  wall1.shapeColor="black";

  wall2 = createSprite(1570,150,10,height/6);
  wall2.shapeColor="black";

  wall3 = createSprite(1570,250,10,height/6);
  wall3.shapeColor="black";

  wall4 = createSprite(1570,350,10,height/6);
  wall4.shapeColor="black";

  //setting values for speed and weight
  speed=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);

  //setting the velocities of car 
  car1.velocityX = speed; 
  
  //setting weight of cars so deformation could be calculated
  weight=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);
  weight4=random(400,1500);

  //calculating values for deformation
  deformation1=0.5*weight*speed*speed/22500 ;
  deformation2=0.5*weight2*speed2*speed2/22500 ;
  deformation3=0.5*weight3*speed3*speed3/22500 ;
  deformation4=0.5*weight4*speed4*speed4/22500 ;
   
}

function draw() {
  background(150,150,150);  

  //setting some condition so the output is well organised
  if(wall1.x-car1.x < wall1.width/2+car1.width/2){
    car2.velocityX = speed2;
    car1.velocityX = 0;
    dic();
  }

  if(wall2.x-car2.x < wall2.width/2+car2.width/2){
    car3.velocityX = speed3;
    car2.velocityX = 0;
    dic2();
  }

  if(wall3.x-car3.x < wall3.width/2+car4.width/2){
    car4.velocityX = speed4;
    car3.velocityX = 0;
    dic3();
  }

  if(wall4.x-car4.x < wall4.width/2+car4.width/2){
    car4.velocityX = 0;
    dic4();
  }

  /*console.log(speed);
  console.log(speed2);
  console.log(speed3);
  console.log(speed4);*/

  drawSprites();
}

function dic(){
if(deformation1<100){
car1.shapeColor="green";
}

if(deformation1>100 && deformation1<180){
  car1.shapeColor="yellow";
  }

if(deformation1>180){
  car1.shapeColor="red";
  }

}

function dic2(){
  if(deformation2<100){
  car2.shapeColor="green";
  }
  
  if(deformation2>100 && deformation3<180){
    car2.shapeColor="yellow";
    }
  
  if(deformation2>180){
    car2.shapeColor="red";
    }
  
  }

  function dic3(){
    if(deformation3<100){
    car3.shapeColor="green";
    }
    
    if(deformation3>100 && deformation3<180){
      car3.shapeColor="yellow";
      }
    
    if(deformation3>180){
      car3.shapeColor="red";
      }
    
    }

    function dic4(){
      if(deformation4<100){
      car4.shapeColor="green";
      }
      
      if(deformation4>100 && deformation4<180){
        car4.shapeColor="yellow";
        }
      
      if(deformation4>180){
        car4.shapeColor="red";
        }
      
      }
