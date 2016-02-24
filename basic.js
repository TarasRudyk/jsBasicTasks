// JavaScript File
var Arr = [1,4,5,6,7,82,0,-65,-23,-4,4.5,-34,-15.6,100.5, 0.1, 0.6, -0.6];
var Arr1 = [];
var Arr2 = [];
var Arr3 = [];
var Arr4 = [];
   
   
var min = Math.min.apply(Math, Arr);
var max = Math.max.apply(Math, Arr);





for (var i = 0; i < Arr.length; i++){
    if (Arr[i] % 2 == 0) {
        Arr1.push(Arr[i]);
    }else{
        Arr2.push(Arr[i]);
     }
}

for (var i = 0; i < Arr.length; i++){
    if (parseFloat(Arr[i])) {
        Arr3.push(Arr[i]);
    }else{
        Arr4.push(Arr[i]);
    }
}


console.log(Arr1);
console.log(Arr2);
console.log ([min, max]);
console.log(Arr3);
console.log(Arr4);