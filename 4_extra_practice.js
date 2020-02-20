// Many algorithms have multiple valid solutions.
// If you have time, try coming up with a different approach/solution for reversing an array


var arr = [1,2,3,4,8,7,5,6,7,"string"];
var zen = 0;
for(var i = arr.length - 1; i >= (arr.length / 2); i--){
   var temp = arr[zen];
   arr[zen] = arr[i];
   arr[i] = temp;

   zen = zen + 1;


}
console.log(arr);


// YOUR CODE HERE


