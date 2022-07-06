const Tom = {
  height: 9,
  mass: 8,
};

const Jerry = {
  height: 10,
  mass: 45,
};

function BMICalc(hei, mass){
  var bmi = mass / (hei * hei);
  return bmi;
}

if (BMICalc(Tom.height, Tom.mass) > BMICalc(Jerry.height, Jerry.mass)) {
    var TomBMI = true;
}else{
    var TomBMI = false;
}

console.log(`Is Toms BMI higher than Jerrys? ${TomBMI}`);