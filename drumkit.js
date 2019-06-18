
const allkey=document.querySelectorAll(".key");

for(let i of allkey){
    i.addEventListener("transitionend", function(e){ //Este evento es cuando se acaba una animacion
   
        if(e.propertyName=="transform"){
            terminartransicion(i);
        }
    })
}

function terminartransicion(i){
    i.classList.remove("playing");
}

window.addEventListener("keydown",reproducir)
   
        

function reproducir(e){
  
    const audio=document.querySelector(`audio[ data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[ data-key="${e.keyCode}"]`);
    
    if(!audio){ //Establece que si el audio es null pase por este if
        
        return false;
    } else{
   
        audio.currentTime=0 //Reproduce el audio desde el inicio cada vez que lo reproducimos
        audio.play(); //Reproduce el audio
       console.log(key.classList.value);
       if(key.classList.value=="key playing"){
        
        key.classList.remove("playing");
     
       
       }else{
    
       
        key.classList.add("playing");
       }
}}