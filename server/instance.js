var Config = require('./config');
var Util = require('util');
var EventEmitter = require("events");

/*
 * An instance that simulates a 2d space, inherits EventEmitter
 */
function Instance(width, height){
  EventEmitter.call(this);
  this.width = width;
  this.height = height;
  this.units = [];
  this.loop_handle = null;
}
Util.inherits(Instance, EventEmitter);

Instance.prototype.update = function(delta){
  this.emit("update");
}

Instance.prototype.start = function(){
  this.loop_handle = gameloop.setGameLoop(this.update.bind(this), Config.interval);
}

module.exports = Instance;
