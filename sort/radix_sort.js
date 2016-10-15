/**
 * Created by chuck7 on 16/10/15.
 */
function radixSort(arr){
    if(arr.length < 2){
        return;
    }
    var radix = 1;
    var maxValue = Math.max.apply(null,arr);

    var loopTimes = 0;
    while(maxValue){
        loopTimes++;
        maxValue = Math.floor(maxValue / 10);
    }
    for(var i = 0;i < loopTimes; i++){
        var arrayOfArr = [];
        for(var j = 0;j<arr.length;j++){
            var position = Math.floor((arr[j] % (10 * radix))/radix);
            arrayOfArr[position] || (arrayOfArr[position] = []);
            arrayOfArr[position].push(arr[j]);
        }
        arr = [];
        for(j = 0;j<10;j++){
            Array.prototype.push.apply(arr,arrayOfArr[j]);
        }
        radix *= 10;
    }
    return arr;
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
console.log(radixSort(testArr));