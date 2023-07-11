function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  
  rotateX(60);
  
  noFill();
  stroke(255);
  
  for(var i=0; i<10; i++){
    beginShape();
    for(var j=0; j<360; j+=10){
      var rad = i * 8;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 10) * 50;
      
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

// OUTRA FORMA

//function setup() {
//  createCanvas(400, 400, WEBGL);
//  angleMode(DEGREES);
//}
//
//function draw() {
//  background(30);
//  
//  rotateX(60);
//  
//  noFill();
//  stroke(255);
//  
//  esfera();
//}
//
//function esfera() {
//  var radius = 100; // Raio da esfera
//  var detail = 10; // Detalhe da esfera (número de vértices)
//
//  for (var lat = 0; lat <= 180; lat += detail) {
//    beginShape(TRIANGLE_STRIP);
//    
//    for (var lon = 0; lon <= 360; lon += detail) {
//      var x = radius * sin(lat) * cos(lon);
//      var y = radius * sin(lat) * sin(lon);
//      var z = radius * cos(lat);
//      
//      vertex(x, y, z);
//      
//      x = radius * sin(lat + detail) * cos(lon);
//      y = radius * sin(lat + detail) * sin(lon);
//      z = radius * cos(lat + detail);
//      
//      vertex(x, y, z);
//    }
//    
//    endShape();
//  }
//}