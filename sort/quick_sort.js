/**
 * Created by chuck7 on 16/10/11.
 */
function quickSort(arr,start,end){
    if(arr.length<2){
        return;
    }
    start = start || 0;
    end = end || arr.length - 1;
    var left = start;
    var right = end;
    var pivot = arr[left];
    while(left < right){
        while(arr[right] >= pivot && left < right){
            right--;
        }
        arr[left] = arr[right];
        while(arr[left] <= pivot && left < right){
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    if(left - 1 > start){
        quickSort(arr,start,left-1);
    }
    if(left +1 < end){
        quickSort(arr,left+1,end);
    }
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
quickSort(testArr,0,testArr.length-1);
console.log(testArr)
