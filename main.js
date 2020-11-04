$(".iframe-wrapper").on("mouseover",function(){
	$('#label').text($(this).attr("data-name"))
	console.log($(this).attr("data-name"))
})
let circle = document.getElementById('label');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

function setup(){
	let c = createCanvas(windowWidth, windowHeight);
	c.parent("canvas-wrapper");
	  frameRate(10)  
}

function draw(){
	let myc = random(["blue","red"])
	fill(myc)
  ellipse(random(0,windowWidth), random(0,windowHeight), 50,50);
  if(frameCount %10 == 0) {
    
    clear();
  }

}