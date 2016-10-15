/**
 * Created by chuck7 on 16/10/13.
 */
function insertSort1(arr){
    if(arr.length < 2){
        return;
    }
    for(var i = 1;i < arr.length;i++){
        //前i-1个数字是从小到大有序排列着的
        var temp = arr[i];
        for(var z = i-1;z >= 0;z--){
            //我们在前i-1个数中只需要找到比arr[i]小的位置停下来,
            //把数字插进去,把后面的数字往后挪就可以了
            //使用数组的splice方法来插入和删除可能代码量更小,但这里主要是为了表达思想
            if(arr[z] <= temp){
                break;
            }
            //我这里的实现是从后往前找位置插入,还没到插入的地方的时候需要把元素都往后挪
            arr[z+1] = arr[z];
        }
        //找到插入的地方了,把该插入的元素插入进去
        arr[z+1] = temp;
    }
}
var testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
insertSort1(testArr);
console.log(testArr);

function insertSort2(arr){
    //上述插入排序过程中存在大量的对元素移动然后插入待排元素的过程,
    //2-路插入排序一般情况下可以使移动次数降低一半,但是要额外占用n个空间;
    //本函数既是2-路插入排序的具体实现;
    if(arr.length < 2){
        return;
    }
    var head,tail = head = 0,tempArr = new Array(arr.length);
    tempArr[0] = arr[0];
    //构建一个新的数组,这个循环数组存放我们的排序结果,排序完成之后再把元素输出回去
    for(var i =1;i<arr.length;i++){
        if(arr[i] >= tempArr[0]){
            //首先和tempArr[0]比较,如果较大,那么就在0到tail中找位置插进去
            var j = 0;
            while(j <= tail){
                if(arr[i] > tempArr[j]){
                    j++
                }else{
                    break;
                }
            }
            tempArr.splice(j,0,arr[i])
            tempArr.splice(++tail+1,1)
        }else{
            ////如果比tempArr[0]小,那么就在head到arr.length - 1中找位置插进去
            var j = arr.length - 1;
            if(head === 0){
                head = j;
                tempArr[head] = arr[i];
            }else{
                while(j >= head){
                    if(arr[i] < tempArr[j]){
                        j--
                    }else{
                        break;
                    }
                }
                tempArr.splice(j+1,0,arr[i])
                tempArr.splice(--head-1,1);
            }
        }
    }
    for(i = 0;i < arr.length;i++){
        //把循环数组中的元素取出来放回原数组
        arr[i] = tempArr[(i + head) % arr.length];
    }
}


testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
insertSort2(testArr);
console.log(testArr);

function insertSort3(arr){
    if(arr.length < 2){
        return;
    }
    var staticLinkedList = arr.map(function(value){
        return {value:value}
    })
    staticLinkedList.next = 0;
    staticLinkedList[0].next = null;
    for(var i = 1;i < arr.length;i++){
        for(var pointer = staticLinkedList;(pointer.next != null) && (staticLinkedList[pointer.next].value < arr[i]);pointer = staticLinkedList[pointer.next]){
        }
        pointer.next === null ? (pointer.next = i,staticLinkedList[i].next = null):(staticLinkedList[i].next =pointer.next,pointer.next = i);
    }
    pointer = staticLinkedList.next;
    i= 0;
    while(pointer !== null){
        arr[i] = staticLinkedList[pointer].value;
        i++;
        pointer = staticLinkedList[pointer].next;
    }
}
testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
insertSort3(testArr);
console.log(testArr);

