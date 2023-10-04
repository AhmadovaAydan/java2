var temp = prompt("Temperaturu daxil edin:");
var question = confirm("daxil etdiyiniz temperatur Celsidir?");
if (question == true) {
  console.log((temp * 9) / 5 + 32);
  alert((temp * 9) / 5 + 32);
} else {
  console.log(((temp - 32) * 5) / 9);
  alert(((temp - 32) * 5) / 9);
}
