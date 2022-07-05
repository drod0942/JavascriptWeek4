var Tom= [9, 8] //[Height, Mass]
var Jerry= [10, 45] //[Height, Mass]

function BMICalc(hei, mass){
  var bmi = mass / (hei * hei);
  return bmi;
}

if (BMICalc(Tom[0], Tom[1]) > BMICalc(Jerry[0], Jerry[1])) {
    var TomBMI = true;
}else{
    var TomBMI = false;
}

console.log(`Is Toms BMI higher than Jerrys? ${TomBMI}`);