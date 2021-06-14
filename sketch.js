
let estrella = []
let cantidad = 100

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i<cantidad; i++) {
  estrella [i] = {}
  
  estrella[i].x = random (0, displayWidth)
  estrella[i].y = random (0, displayHeight)
    }
}
function draw() {
  clear ();
  for (let i = 0; i<cantidad; i++) {
    
  square(estrella[i].x, estrella[i].y, 5);
  estrella[i].x-=0.05;
  

  if (estrella[i].x >= displayWidth){
    estrella[i].x = estrella[i].x - displayWidth;
  }
  
  if (estrella[i].x < 0) {
    estrella[i].x = estrella[i].x + displayWidth;
  }
  
    
    }
}