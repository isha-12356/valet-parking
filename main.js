canvas= document.getElementById('myCanvas');

ctx= canvas.getContext("2d");

greencar_width= 75; 
greencar_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x= 5;
greencar_y= 225;


//Set initial position for a car image.

function add() {
	
	bg = new Image();
	bg.onload = uploadbackground;
	bg.src =  background_image;
	
	greencar = new Image();
	greencar.onload = uploadgreencar;
	greencar.src  = greencar_image;

}

function uploadbackground() {
	
	ctx.drawImage(bg,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	
	ctx.drawImage(greencar,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y >=0)
{

greencar_y = greencar_y - 10;
uploadbackground();
uploadgreencar();

}

}

function down()
{
if(greencar_y <=300)
{

greencar_y = greencar_y + 10;
uploadbackground();
uploadgreencar();

}

}

function left()
{
if(greencar_x >=0)
{

greencar_x = greencar_x - 10;
uploadbackground();
uploadgreencar();

}

}

function right()
{
if(greencar_x <=700)
{

greencar_x = greencar_x + 10;
uploadbackground();
uploadgreencar();



}

}

