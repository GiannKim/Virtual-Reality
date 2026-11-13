let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mechTemplate, army = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");

  for(let i = 0; i<50; i++){
    let mech = new Mech(rnd(-50,50), 13, rnd(-50,50));
    army.push(mech);
  }

 
  loop();
})
function loop(){
  for(let mech of army){
    mech.launch();
  }
  window.requestAnimationFrame( loop );
}
