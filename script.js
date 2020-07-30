/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, text, mouseX, mouseY, 
          strokeWeight, line, tint, mouseIsPressed, windowWidth, windowHeight, noStroke, pmouseX, pmouseY, point*/

/*noStroke(), createCanvas, background, ellipse*/
//defines our little guy, his hue, how he randomly changes, etc
let littleGuy, brushHue, x, y, randomValue;
const width = 300, length = 300; 

function setup() {  
  createCanvas(width, length);
  colorMode(HSB, 360, 100, 100);
  //brings in our little guy png from the assets
  littleGuy = loadImage("https://cdn.glitch.com/432639f3-16c9-421b-acda-0916b5f9cbd4%2Fwalk.png?v=1594399924632")
  noStroke();
  //loads the background
  background(random(360), random(100), random(100));
  brushHue = 0;
  stroke(brushHue);
   strokeWeight(3); 
  
  x = width / 2;
  y = width / 2;
}


function draw() {
  setColors(); 
  
  // randomly moves the line
  randomValue = random(); 
  if(randomValue < .25){
    x--;
  }
  else if(randomValue < .5){
    x++;
  }
  else if(randomValue < .75){
    y--;
  }
  else{
    y++;
  }
  
  // wrap around the left and right sides
  if(x < 0){
    x = width;
  }
  else if(x > width){
    x = 0;
  }
  
  // wrap around the top and bottom sides
  if(y < 0){
    y = height;
  }
  else if(y > height){
    y = 0;
  }
  
  // draw the point
  point(x, y);
 
} 

function setColors() {
  // stroke(brushHue, 50, 80);
  // fill(brushHue, 50, 80);
  
  //set tint and stroke
  tint(brushHue, 100, 100);
  stroke(brushHue, 100, 100); 
  
  //increase brushHue by 1
  brushHue+= 1; 
  if (brushHue  >= 360) {
    brushHue = 0; 
  }
}

//when mouse clicked, our little guy appears
function mouseClicked(){
  //determines the little guy's size and makes him appear wherever the mous clicks
  image(littleGuy, mouseX, mouseY, 100, 100)
}

//when any key is pressed, the little guy and random walker both reset
function keyPressed() {
  background(random(360), random(100), random(100));
}