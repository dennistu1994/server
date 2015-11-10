var SAT = require('sat');

function Unit(width, height){
  this.width = width;
  this.height = height;
  this.collider = new SAT.Box(new SAT.V(0, 0), width, height).toPolygon();
}

module.exports = Unit;
