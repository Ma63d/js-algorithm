/**
 * Created by chuck7 on 16/10/15.
 */
function radixSort(arr){
    if(arr.length < 2){
        return;
    }
    var radix = 1;
    //找出最大值
    var maxValue = Math.max.apply(null,arr);

    var loopTimes = 0;
    //看看最大值是基数的几次方就知道要循环几次了
    while(maxValue){
        loopTimes++;
        maxValue = Math.floor(maxValue / 10);
    }
    for(var i = 0;i < loopTimes; i++){
        //这个数组的元素就是"桶",而每个桶又是一个数组
        var arrayOfArr = [];
        for(var j = 0;j<arr.length;j++){
            var position = Math.floor((arr[j] % (10 * radix))/radix);
            //把数字扔到桶里的过程就是向数组中push即可
            arrayOfArr[position] || (arrayOfArr[position] = []);
            arrayOfArr[position].push(arr[j]);
        }
        //清空原数组
        arr = [];
        for(j = 0;j<10;j++){
            //从各个桶里按顺序把元素收集起来
            Array.prototype.push.apply(arr,arrayOfArr[j]);
        }
        radix *= 10;
    }
    return arr;
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
console.log(radixSort(testArr));