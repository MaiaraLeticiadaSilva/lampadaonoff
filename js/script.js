let body=document.querySelector("body");
//lampada
let divLamp=document.createElement("div");
let imgLamp=document.createElement("img");
imgLamp.src="./imagens/lampada-on.gif";
imgLamp.id="lamp"
divLamp.id="dl"
divLamp.append(imgLamp);
body.append(divLamp);

//interruptor
let divInt=document.createElement("div");
let imgInterruptor=document.createElement("img");
imgInterruptor.src="./imagens/interruptores-0.jpg";
imgInterruptor.id="interruptor"
divInt.id="di"
divInt.append(imgInterruptor);
body.append(divInt);

    imgInterruptor.onclick=function(){
        if(imgLamp.src.match(".on"))
        {
            imgLamp.src="./imagens/lampada-off.gif"
            imgInterruptor.src="./imagens/interruptores-1.png"
            document.body.style.backgroundColor="black"
        }else{
            imgLamp.src="./imagens/lampada-on.gif"
            imgInterruptor.src="./imagens/interruptores-0.jpg"
            document.body.style.backgroundColor="white"
        }
    }