let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [], ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let rocket = new Rocket(rnd(20,40), 0 ,rnd(-20,-40));
    rockets.push(rocket);
  }
  for(let i = 0; i<500;i++){
    let ufo = new Ufo(rnd(-50, 50), 50, rnd(-50, 50));
    ufos.push(ufo);
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }
  
  for(let ufo of ufos){
    ufo.invade();
  }

  window.requestAnimationFrame( loop );
}
