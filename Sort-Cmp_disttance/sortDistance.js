let coordinatePlane = [];
let count = 0;
function addElement() {
  let horizontalValue = parseInt(document.getElementById("horizontal").value); //use parseInt to change object into number
  let verticalValue = parseInt(document.getElementById("vertical").value);

  let point = { x: horizontalValue, y: verticalValue };
  coordinatePlane.push(point);
  count++;
  document.getElementById(
    "countPoint"
  ).innerHTML = `The current number of point is: ${count}`;
}

function displayElement() {
  document.getElementById("d1").innerHTML = `The current coordinate plane`;
  let pointsHTML = "";
  coordinatePlane.forEach((point) => {
    pointsHTML += `<p>(${point.x}, ${point.y})</p>`; // Assign displayed elements into a variable
  });

  document.getElementById("myDiv").innerHTML = pointsHTML; // show that variable
}
function distanceFromOrigin(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}
function cmp(point1, point2) {
  let dist1 = distanceFromOrigin(point1);
  let dist2 = distanceFromOrigin(point2);

  // Compare by distance
  if (dist1 < dist2) return -1;
  if (dist1 > dist2) return 1;

  // If distances are equal, compare x-coordinates
  if (point1.x < point2.x) return -1;
  if (point1.x > point2.x) return 1;

  // If x-coordinates are equal, compare y-coordinates
  if (point1.y < point2.y) return -1;
  if (point1.y > point2.y) return 1;

  // Points are equal
  return 0;
}
function sortPoints() {
  document.getElementById(
    "d2"
  ).innerHTML = `The new coordinate plane by sorting`;
  coordinatePlane.sort((point1, point2) => {
    let dist1 = distanceFromOrigin(point1);
    let dist2 = distanceFromOrigin(point2);

    // Compare by distance
    if (dist1 < dist2) return -1;
    if (dist1 > dist2) return 1;

    // If distances are equal, compare x-coordinates
    if (point1.x < point2.x) return -1;
    if (point1.x > point2.x) return 1;

    // If x-coordinates are equal, compare y-coordinates
    if (point1.y < point2.y) return -1;
    if (point1.y > point2.y) return 1;

    // Points are equal
    return 0;
  });
  let pointsHTML = "";
  coordinatePlane.forEach((point) => {
    pointsHTML += `<p>(${point.x}, ${point.y})</p>`; // Assign displayed elements into a variable
  });

  document.getElementById("sortPoints").innerHTML = pointsHTML; // show that variable
}
