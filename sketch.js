let time = 0;
let wave = [];

function setup() {
  createCanvas(800, 400);
	slider = createSlider(1,100,1);
}

function draw() {
  background(0);
	translate(400, 200);
	
	maxn = slider.value();
	oscn = ceil(maxn/2 + sin(time) * maxn/2);
	//print(oscn);
	
	let x = 0;
	let y = 0;
	for(let i=0; i < oscn; i++) {
		let prevx = x;
		let prevy = y;
		
		let n = i * 2 + 1;
		let radius = 100 * (4 / (n * PI));
		x += radius * cos(n * time);
		y += radius * sin(n * time);
	
		stroke(255,100);
		noFill();
		ellipse(prevx,prevy, radius*2);


		fill(255);
		stroke(255);
		line(prevx,prevy,x,y);
		//ellipse(x, y, 8);


		
		
	}
	
	translate(200,0);
	line(x-200,y,0,wave[0]);
	wave.unshift(y);
	
	beginShape();
	noFill();
	for(let i=0; i <wave.length; i++) {
		vertex(i, wave[i]);
	}
	endShape();
	
	time += 0.02;
	
	if(wave.length > 400) {
		wave.pop();
	}
}