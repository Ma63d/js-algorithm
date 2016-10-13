/**
 * Created by chuck7 on 16/10/13.
 */
function shellSort(arr){
    if(arr.length < 2){
        return;
    }
    var growth = 1;
    while(growth < arr.length / 3){
        //先计算出growth可取的最大值,
        //在后面的代码中,growth不断减小,从而实现希尔排序的缩小增量排序
        growth = growth * 3 + 1;
    }
    while(growth > 0){
        _sortWithGrowth(arr,growth)
        growth = (growth - 1)/3;
    }
}
function _sortWithGrowth(arr,growth){
    for(var i = 0;i < growth;i++){
        for(var j = i + growth;j < arr.length; j += growth){
            var temp = arr[j];
            var z = j - growth;
            while(z >= i){
                if(arr[z] <= temp){
                    break;
                }
                arr[z+growth] = arr[z];
                z -= growth;
            }
            arr[z + growth] = temp;
        }
    }
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
shellSort(testArr);
console.log(testArr);