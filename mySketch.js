function setup() {
	createCanvas(600, 600);
	background(104, 210, 255);
}

function draw() {
	background(104, 210, 255, 10);

	
	simpleShape(frameCount, 50, 120);
	simpleShape(frameCount, 250, 120);
	
	//ellipseShape(mouseX,mouseY,50,100);
	stroke(255,255,255);
	fill(253,255,48);
  ellipse(50,50,100,100);
}


function simpleShape(X,Y,D) {
	stroke(104,210,255);
	//fill(104, 210, 255);
	//rect(X+70,50,250,200);
	
	
fill(255,255,255)
	ellipse(X+150,Y+50,70,70)
	stroke(255,255,255);
	fill(255,255,255)
	ellipse(X+250,Y+50,70,70)
fill(255,255,255)
	ellipse(X+150,Y+150,70,70)
fill(255,255,255)
ellipse(X+250,Y+150,70,70)
	fill(255,255,255)
	ellipse(X+120,Y+100,70,70)
fill(255,255,255)
ellipse(X+170,Y+100,90,100)
	fill(255,255,255)
ellipse(X+270,Y+100,100,100)
fill(255,255,255)
ellipse(X+200,Y+100,120,120)
}


function ellipseShape(X,Y,D){
fill(233,34,12)
ellipse(X,Y,150,150)
fill(255,255,255)
ellipse(X,Y,100,100)
fill(300,40,12)
ellipse(X,Y,50,50)
	
}

function mousePressed(){     //mousePressed is special function that is only called when you press the mouse
		ellipseShape(mouseX,mouseY,300,300);
}
