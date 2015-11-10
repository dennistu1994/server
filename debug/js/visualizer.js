function Visualizer(){
}

Visualizer.prototype.init = function(resolution, instance){
this.renderer = new THREE.WebGLRenderer();
this.renderer.setSize(resolution.width, resolution.height);
$(this.renderer.domElement).appendTo($('#container'));
var screen_aspect_ratio = window.innerWidth / window.innerHeight;
var width, height;
var nav_height = 60;
if(screen_aspect_ratio > resolution.aspect_ratio){
  height = window.innerHeight - nav_height;
  width = height * resolution.aspect_ratio;
} else {
  width = window.innerWidth - nav_height * resolution.aspect_ratio;
  height = width / resolution.aspect_ratio;
}
$(this.renderer.domElement).width(width).height(height);

this.scene = new THREE.Scene();

this.p_camera = new THREE.PerspectiveCamera( 90, resolution.aspect_ratio, 0.1, 1000 );
//this.o_camera = new THREE.OrthographicCamera( resolution.width / - 2, resolution.width / 2, resolution.height / 2, resolution.height / - 2, 0.1, 2 );

window.p_camera = this.p_camera;
this.scene.add(this.p_camera);
Debug.process_instance(instance); //add meshes
instance.units.forEach(function(unit){
  this.scene.add(unit.mesh);
}.bind(this));
this.p_camera.position.z = resolution.height/2;
//this.o_camera.position.z = 1;

}

Visualizer.prototype.render = function(){
  requestAnimationFrame(this.render.bind(this));
  this.renderer.render(this.scene, this.p_camera);
};
