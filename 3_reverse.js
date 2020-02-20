// Given var arr = [8,6,7,5,3,0,9] reverse the array and print the result
// Predicted output: [9,0,3,5,7,6,8]
/*

var arr = [8,6,7,5,3,0,9];
for (var i = 0; i < arr.length / 2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
console.log(arr);

*/// When you have solved this, create new values for your array and ensure it still works as expected.

var arr = [1,1,1,1,1,2,2,2,2,2,];
for (var i = 0; i < arr.length / 2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
console.log(arr);