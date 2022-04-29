function kmToMiles() {
  var km = document.getElementById("km").value;
  var miles = km / 1.609;
  document.getElementById("miles").innerHTML = miles;
}
function milesToKm() {
  var miles = document.getElementById("miles1").value;
  var km = miles * 1.609;
  document.getElementById("km1").innerHTML = km;
}
