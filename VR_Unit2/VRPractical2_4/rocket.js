class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
    
    this.obj = document.createElement("a-entity");
    
    let tips = document.createElement("a-cone");
    tips.setAttribute("radius-top", "0");
    tips.setAttribute("radius-bottom", "0.5");
    tips.setAttribute("height", "1");
    tips.setAttribute("color", "red");
    tips.setAttribute("position", "0 0 0");
    this.obj.append(tips);

    let body = document.createElement("a-cylinder");
    body.setAttribute("radius", "0.5");
    body.setAttribute("height", "2");
    body.setAttribute("color", "gray");
    body.setAttribute("position", "0 -1.5 0");
    this.obj.append(body);

    let trail = document.createElement("a-cone");
    trail.setAttribute("radius-top", "0");
    trail.setAttribute("radius-bottom", "0.25");
    trail.setAttribute("height", "2");
    trail.setAttribute("color", "orange");
    trail.setAttribute("position", "0 -3.5 0");
    trail.setAttribute("rotation", "-180 0 0");
    this.obj.append(trail);

    this.obj.setAttribute("position",{x:x, y:0, z:z});
    scene.append(this.obj);
  }


  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}