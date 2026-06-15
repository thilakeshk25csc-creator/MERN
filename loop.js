//for loop

var number = 2;

for (var i = 1; i <= 10; i = i + 1) {
    var result = number * i;
    console.log(number + " x " + i + " = " + result);
}

//while loop


var number = 2;
var i = 1;

while (i <= 10) {
    var result = number * i;
    console.log(number + " x " + i + " = " + result);
    
    i = i + 1;
}


//Do-While

let count =6
do{
    console.log(count);
    count++;

}while(count <= 5)
    console.log("outside do ..while");
