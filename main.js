screenW = 0;
screenH = 0;
apple= "";
draw_apple ="";
speak_data ="";
to_number ="";


var SpeechRecognition = window.webkitSpeechRecognition; 

var rec = new SpeechRecognition();


function start(){
    document.getElementById("hello").innerHTML = "The computer is listening";
    rec.start();
} 

rec.onresult = function(event){
console.log(event);
 content = event.result[0][0].transcript;
 to_number = Number(content);

 if(Number.isInteger(to_number)){
     draw_apple = "set";
     document.getElementById("hello").innerHTML = "Started drawing Apples";
     }else{
        document.getElementById("hello").innerHTML = "The speech has not recognized a number";
     }
 
}

function preload(){
apple = loadImage("g.png");
}

function setup(){
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    canvas = createCanvas(screenW,screenH-150);
    canvas.position(100)
}

function draw(){

    if(draw_apple == "set") 
    for(let i = 1; i <= 1; i++){
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple,x,y,20,20);
        document.getElementById('hello').innerHTML = to_number + " Apple Drawn";
           }
       
    }


