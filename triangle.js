// spins a triangle (poorly) on the display of the bangle2.js
g.reset();
g.clear();

let c = [(176/2), (176/2)];
let s = 32;
let triangle = [
  c[0], c[1]+s,
  c[0]+s, c[1]-s,
  c[0]-s, c[1]-s ];
let angleDeg = 0;
let color = {
  r: 0.1,
  g: 0.1,
  b: 0.1,
};
g.setColor(color.r, color.g, color.b);

setInterval(function() {
  var angle = angleDeg * Math.PI / 180;
  // could roll this up? Dunno which is faster
  var v1 = {x: 0, y: 0+s};
  var v2 = {x: 0+s, y: 0-s};
  var v3 = {x: 0-s, y: 0-s};

  var rv1 = [
    (v1.x * Math.cos(angle)) - (v1.y * Math.sin(angle)),
    (v1.x * Math.sin(angle)) + (v1.y * Math.cos(angle))
  ];

  var rv2 = [
    (v2.x * Math.cos(angle)) - (v2.y * Math.sin(angle)),
    (v2.x * Math.sin(angle)) + (v2.y * Math.cos(angle))
  ];

  var rv3 = [
    (v3.x * Math.cos(angle)) - (v3.y * Math.sin(angle)),
    (v3.x * Math.sin(angle)) + (v3.y * Math.cos(angle))
  ];

  g.clear();
  g.fillPolyAA([
    c[0]+rv1[0], c[1]+rv1[1],
    c[0]+rv2[0], c[1]+rv2[1],
    c[0]+rv3[0], c[1]+rv3[1]
  ]);
  g.flip();
  // trust me i'm a mathematecian
  angleDeg = angleDeg % 360 + 3;

}, 33);
