var  coronaimg , boyimg , girlimg,a,b,c,d,e,f,g,title;
var count = 0;

function preload(){
  coronaimg = loadImage("corona.png");
  boyimg = loadImage("boy.png");
  girlimg = loadImage("girl.png");
  a = loadImage("a.jpg");
  b = loadImage("b.jpg");
  c = loadImage("c.jpg");
  d = loadImage("d.jpg");
  e = loadImage("e.jpg");
  f = loadImage("f.jpg");
  g = loadImage("g.jpg");
  title = loadImage("title.png");
}
function setup() {
  createCanvas(1200,600);  
  
}

function draw() {
  background("black");
  
  image(coronaimg,350,100,100,100);
  image(boyimg,270,255,380,400);
  image(girlimg,850,205,400,640);
  image(title,450,60,350,200);
  if(count ===1){
  image(a,600,400,300,200);
  }
  if(count ===2){
   image(b,600,400,300,200);
   }
  if(count ===3){
  image(c,600,400,300,200);
  }
  if(count ===4){
   image(d,600,400,300,200);
  }
   if(count ===5){
   image(e,600,300,300,300);
    }
   if(count ===6){
  image(f,600,400,300,200);
    }
  if(count ===7){
  image(g,600,400,300,200);
   }
  
}
function mousePressed(){
  count = count+1;
}