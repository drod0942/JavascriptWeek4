var name1 = window.prompt("Type Name 1: ");
var name2 = window.prompt("Type Name 2: ");

if (name1.length > name2.length) {
    window.alert(`The name ${name1} is longer than ${name2} 
    by ${name1.length - name2.length} characters`);
}
else{
    window.alert(`The name ${name2} is longer than ${name1} 
    by ${name2.length - name1.length} characters`);
}

