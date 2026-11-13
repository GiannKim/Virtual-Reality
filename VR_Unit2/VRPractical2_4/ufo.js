class Ufo{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.03;
    
    this.obj = document.createElement("a-entity");
    
    let base = document.createElement("a-sphere");
    base.setAttribute("scale", "3 0.5 3");
    base.setAttribute("color", "#7f8c8d");
    base.setAttribute("metalness", "0.8");
    this.obj.append(base);

    let head = document.createElement("a-sphere");
    head.setAttribute("position", "0 0 0");
    head.setAttribute("color", "#3498db");
    head.setAttribute("rotation", "-90, 0, 0");
    head.setAttribute("scale", "1.5, 1.5, 1.5");
    this.obj.append(head);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }


  invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}