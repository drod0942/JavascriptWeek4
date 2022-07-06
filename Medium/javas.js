let decd = true;

while (decd) {
  const num = parseInt(prompt("Enter Number: (-1 to stop)"));

  switch (num) {
    case -1:
        decd = false;
        break;
    case 1:
        window.alert(`The Month for ${num} is: January`);
        break;
    case 2:
        window.alert(`The Month for ${num} is: February`);
        break;
    case 3:
        window.alert(`The Month for ${num} is: March`);
        break;
    case 4:
        window.alert(`The Month for ${num} is: April`);
        break;
    case 5:
        window.alert(`The Month for ${num} is: May`);
        break;
    case 6:
        window.alert(`The Month for ${num} is: June`);
        break;
    case 7:
        window.alert(`The Month for ${num} is: July`);
        break;
    case 8:
        window.alert(`The Month for ${num} is: August`);
        break;
    case 9:
        window.alert(`The Month for ${num} is: September`);
        break;
    case 10:
        window.alert(`The Month for ${num} is: October`);
        break;
    case 11:
        window.alert(`The Month for ${num} is: November`);
        break;
    case 12:
        window.alert(`The Month for ${num} is: December`);
        break;
    default:
        window.alert(`Not a Valid Number!`);
  }
  
}


