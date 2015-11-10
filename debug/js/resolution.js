
var Resolutions = {};

Resolutions.make_res = function(width,height){
  return {width: width, height: height, aspect_ratio: width/height};
};
Resolutions["1080p"]  = Resolutions.make_res(1920, 1080);
Resolutions["720p"] = Resolutions.make_res(1280, 720);
