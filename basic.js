// JavaScript File
//var Arr = [1,4,5,6,7,82,0,-65,-23,-4,4.5,-34,-15.6,100.5, 0.1, 0.6, -0.6];
var Arr1 = [];
var Arr2 = [];
var Arr3 = [];
var Arr4 = [];
var Arr = [];


function calc() {
    Arr.push(document.getElementById("num_1").value);
    Arr.push(document.getElementById("num_2").value);
    Arr.push(document.getElementById("num_3").value);
    Arr.push(document.getElementById("num_4").value);
    Arr.push(document.getElementById("num_5").value);
    Arr.push(document.getElementById("num_6").value);
   // document.getElementById("Arr").innerHTML = Arr;


     
//min   
    var min = Math.min.apply(Math, Arr);
    document.getElementById("min").innerHTML = min;
    
//max
    var max = Math.max.apply(Math, Arr); 
    document.getElementById("max").innerHTML = max;


    // even and odd numbers
    for (var i = 0; i < Arr.length; i++){
        if (Arr[i] % 2 === 0) {
            Arr1.push(Arr[i]);
        }else{
            Arr2.push(Arr[i]);
         }
    }
    document.getElementById("odd").innerHTML = Arr2;



    // intager numbers
    for (var i = 0; i < Arr.length; i++){
        if (Arr[i] % 1 === 0) {
            Arr3.push(Arr[i]);
        }else{
            Arr4.push(Arr[i]);
        }
    }


    document.getElementById("even").innerHTML = Arr1;   

}


/*


console.log(Arr1);
console.log(Arr2);
console.log ([min, max]);
console.log(Arr3);
console.log(Arr4);
*/