/**
 * Created by chuck7 on 16/10/13.
 */
function heapSort(arr){
    var temp;
    if(arr.length <2){
        return;
    }
    for(var i = Math.floor((arr.length - 2) / 2);i > -1;i--){
        //从最后一个非叶子节点开始调整,使得以其为根节点的子树成为一个小根堆
        //这样,当遍历到根节点时,这棵树也就被调整成为了小根堆
        _heapAdjust(arr,i,arr.length-1)
    }
    for(var j = arr.length - 1;j > 0;j--){
        //将最大的节点输出(把根节点和arr[j]节点交换)
        temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        //对0~j-1节点构成的子树,进行调整,使其再次成为小根堆
        _heapAdjust(arr,0,j-1);
    }
}
//堆调整函数,在假设某一节点的左右子树均为小根堆的情况下,调整该节点为根节点的子树,使其成为小根堆
function _heapAdjust(arr, start, end){
    var top = arr[start];
    //将top调整到合适的位置
    for(var i = start * 2 + 1; i < end + 1;i = start * 2 + 1){
        if(i != end && arr[i] > arr[i+1]){
            i++
        }
        if(top < arr[i]){
            //如果此时满足两个子节点都小于top,那么也就调整好了
            break;
        }
        //否则将那个较小的节点上移
        arr[start] = arr[i];
        //指针指到那个较小的节点上去,接下来不断的遍历子树,不断将较小的节点向上移动
        start = i;
    }
    //此时,start就是top节点该存放的位置
    arr[start] = top;
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
heapSort(testArr);
console.log(testArr);