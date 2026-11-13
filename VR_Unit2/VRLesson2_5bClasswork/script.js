let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];
let clouds = [];
let snowflakes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions
  for(let i=0; i<20; i++){
    let x = rnd(-20,20);
    let y = rnd(5,15);
    let z = rnd(-20,20);
    let c = new Cloud(x, y, z);
    clouds.push(c)
    let s = new Snowflake(x, 15, z);
    snowflakes.push(s);
  }

  //Challenge 3: Create an array to store 100 snowflakes in random positions
  
  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  //Challenge 2: Traverse your array of clouds and make each cloud fly
  for(let i=0; i<clouds.length; i++){
    let c = clouds[i];
     c.fly();
  }
  for(let i=0;i<snowflakes.length;i++){
    let snowflake = snowflakes[i];
    snowflake.fall();
  }
  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  
  window.requestAnimationFrame( loop );
}
