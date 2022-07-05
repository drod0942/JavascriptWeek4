var name = window.prompt("Type anything: ");

if (name.toUpperCase() === name) {
    console.log('Yelling');
  } else if(name.toLowerCase() === name){
    console.log('Whispering');
  }
  else{
    console.log('Talking Normal');
  }