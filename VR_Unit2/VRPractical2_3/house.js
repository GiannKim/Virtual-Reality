class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("color", "brown");
    base.setAttribute("position","0 0 0");
    base.setAttribute("width", "2");
    base.setAttribute("depth", "2")
    base.setAttribute("height", "2");
    this.obj.append(base);

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "red");
    roof.setAttribute("position", "0 1.65 0 ");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("rotation", "270 0 0");
    roof.setAttribute("radius","1.3");
    roof.setAttribute("height", "2");
    this.obj.append(roof);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
    }
}