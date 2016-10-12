/**
 * Created by chuck7 on 16/10/12.
 */
function mergeSort(array,start,end){
    if(array.length<2){
        return;
    }
    start = start || 0;
    end = end || array.length - 1;
    console.log(start);
    console.log(end);
    var mid = Math.floor((start + end) / 2);
    if(start < mid){
        mergeSort(array,start,mid);
    }
    if(mid + 1< end){
        mergeSort(array,mid+1,end);
    }
    var i = start,j = mid + 1,z = 0;
     var tempArr = [];
    while((i < mid + 1 ) && ( j < end + 1)){
        if(array[i] > array[j]){
            tempArr[z] = array[j];
            j++;
            z++;
        }else{
            tempArr[z] = array[i];
            i++;
            z++;
        }
    }
    if(i < mid + 1){
        while(i < mid + 1){
            tempArr[z] = array[i];
            i++;
            z++;
        }
    }
    if(j < end + 1){
        while(j < end + 1){
            tempArr[z] = array[j];
            j++;
            z++;
        }
    }
    for(i = 0;i < end + 1 - start;i++){
        array[i+start] =  tempArr[i];
    }
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
mergeSort(testArr,0,testArr.length-1);
console.log(testArr)
