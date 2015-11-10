var Debug = {
  process_instance: function(instance){
    instance.units.forEach(function(unit){
      //unit is a client unit with a collider, now add a mesh based on the collider
      var geometry = new THREE.PlaneGeometry(unit.width, unit.height);
      var material = new THREE.MeshBasicMaterial({
        wireframe: true
      });
      unit.mesh = new THREE.Mesh(geometry, material);
    });
  }
};
