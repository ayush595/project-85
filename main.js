var canvas= document.getElementById("canvas");
ctx.canvas.getContext("2d");

var carwid= 75;
var carhei=  225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var greenx= 5;
var greeny= 225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;

	greencar_imgTag= new image();
	greencar_imgTag.onload= uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawimage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawimage(greencar_imgTag, greenx, greeny, carwid, carhei)

	
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
	if (greeny >= 0) {
		greeny= greeny - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (greeny <= 600) {
		greeny = greeny + 10
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
