let scene, car, rocket, pokeball, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    car.x = 0;
    car.dx= 0.01;

    rocket = document.querySelector("#rocket");
    rocket.x = 0;
    rocket.dx= 0.01;

    pokeball = document.querySelector("#pokemonball");
    pokeball.x = 0;
    pokeball.dx = 5;

    dude = document.querySelector("#dude");
    dude.x = 1;
    dude.dx = 0.005;

    sun = document.querySelector("#sun");
    sun.x = 0;
    sun.dx = 0.1;

    loop()
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:0});

    rocket.x += rocket.dx;
    rocket.setAttribute("position",{x:3, y:rocket.x, z:-4});

    pokeball.x += pokeball.dx;
    pokeball.setAttribute("rotation",{x:pokeball.x, y:0, z:0});

    dude.x += dude.dx;
    dude.setAttribute("scale",{x:dude.x,y:dude.x,z:dude.x});

    sun.x += sun.dx;
    sun.setAttribute("opacity",sun.x);

    window.requestAnimationFrame(loop);
}