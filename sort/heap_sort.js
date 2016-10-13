/**
 * Created by chuck7 on 16/10/13.
 */
function heapSort(arr){
    var temp;
    if(arr.length <2){
        return;
    }
    for(var i = Math.floor((arr.length - 2) / 2);i > -1;i--){
        _heapAdjust(arr,i,arr.length-1)
    }
    for(var j = arr.length - 1;j > 0;j--){
        temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        _heapAdjust(arr,0,j-1);
    }
}
function _heapAdjust(arr, start, end){
    var top = arr[start];
    for(var i = start * 2 + 1; i < end + 1;i = start * 2 + 1){
        if(i != end && arr[i] > arr[i+1]){
            i++
        }
        if(top < arr[i]){
            break;
        }
        arr[start] = arr[i];
        start = i;
    }
    arr[start] = top;
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
heapSort(testArr);
console.log(testArr);