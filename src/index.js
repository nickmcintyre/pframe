import p5 from 'p5';
import * as aframe from 'aframe';


class Scene {
  constructor() {
    this.elt = createElement('a-scene');
  }
  
  child(entity) {
    this.elt.child(entity.elt);
  }
}


function createScene() {
  noCanvas();
  angleMode(DEGREES);
  p5.prototype._scene = new Scene();
}


class Primitive {
  constructor(x = 0, y = 0, z = 0) {
    this._position = createVector(x, y, z);
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this._id = '';
    for (let i = 0; i < 10; i += 1) {
      this._id += chars.charAt(floor(random(chars.length)));
    }
  }
  
  color(c) {
    const cc = color(c);
    this.elt.attribute('color', cc.toString('#rrggbb'));
  }
  
  rotation(x, y, z) {
    this.elt.attribute('rotation', `${x} ${y} ${z}`);
  }
  
  position(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      return this._position;
    }

    this._position.set(x, y, z);
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  id(id) {
    if (typeof id === 'undefined') {
      return this._id;
    }

    this._id = id;
  }
}


class Box extends Primitive {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.elt = createElement('a-box');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  geom(width = 1, height = width, depth = height) {
    this.elt.attribute('width', width);
    this.elt.attribute('height', height);
    this.elt.attribute('depth', depth);
  }
}


function createBox(x = 0, y = 0, z = 0) {
  const b = new Box(x, y, z);
  p5.prototype._scene.child(b);

  return b;
}


class Sphere extends Primitive {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.elt = createElement('a-sphere');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  geom(radius = 1) {
    this.elt.attribute('radius', radius);
  }
}


function createSphere(x = 0, y = 0, z = 0) {
  const s = new Sphere(x, y, z);
  p5.prototype._scene.child(s);

  return s;
}


class Cone extends Primitive {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.elt = createElement('a-cone');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  geom(radiusBottom = 1, radiusTop = 0.8, height = 1) {
    this.elt.attribute('radius-bottom', radiusBottom);
    this.elt.attribute('radius-top', radiusTop);
    this.elt.attribute('height', height);
  }
}


function createCone(x = 0, y = 0, z = 0) {
  const c = new Cone(x, y, z);
  p5.prototype._scene.child(c);

  return c;
}


class Cylinder extends Primitive {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.elt = createElement('a-cylinder');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  geom(radiusBottom = 1, radiusTop = 0.8, height = 1) {
    this.elt.attribute('radius-bottom', radiusBottom);
    this.elt.attribute('radius-top', radiusTop);
    this.elt.attribute('height', height);
  }
}


function createCylinder(x = 0, y = 0, z = 0) {
  const c = new Cylinder(x, y, z);
  p5.prototype._scene.child(c);

  return c;
}


class Plane extends Primitive {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.elt = createElement('a-plane');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  geom(width = 1, height = 1) {
    this.elt.attribute('width', width);
    this.elt.attribute('height', height);
  }
}


function createPlane(x = 0, y = 0, z = 0) {
  const p = new Plane(x, y, z);
  p5.prototype._scene.child(p);

  return p;
}


class Torus extends Primitive {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.elt = createElement('a-torus');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  geom(radius = 1, radiusTubular = 0.2) {
    this.elt.attribute('radius', radius);
    this.elt.attribute('radius-tubular', radiusTubular);
  }
}


function createTorus(x = 0, y = 0, z = 0) {
  const t = new Torus(x, y, z);
  p5.prototype._scene.child(t);

  return t;
}


p5.prototype.createScene = createScene;
p5.prototype.createBox = createBox;
p5.prototype.createSphere = createSphere;
p5.prototype.createCone = createCone;
p5.prototype.createCylinder = createCylinder;
p5.prototype.createPlane = createPlane;
p5.prototype.createTorus = createTorus;


export default p5;
