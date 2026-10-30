let scene, car, rocket, pokeball, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    car.x = 0;
    car.dy= 0.01;

    rocket = document.querySelector("#rocket");
    rocket.x = 0;
    rocket.dy= 0.01;

    loop()
})

function loop(){
    car.x += car.dy;
    car.setAttribute("position",{x:car.x, y:0, z:0});

    rocket.x += rocket.dy;
    rocket.setAttribute("position",{x:3, y:rocket.x, z:-4});

    window.requestAnimationFrame(loop);
}