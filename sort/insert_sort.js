/**
 * Created by chuck7 on 16/10/13.
 */
function insertSort1(arr){
    if(arr.length < 2){
        return;
    }
    for(var i = 1;i < arr.length;i++){
        var temp = arr[i];
        for(var z = i-1;z >= 0;z--){
            if(arr[z] <= temp){
                break;
            }
            arr[z+1] = arr[z];
        }
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
    for(var i =1;i<arr.length;i++){
        if(arr[i] >= tempArr[0]){
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
        arr[i] = tempArr[(i + head) % arr.length];
    }
}


testArr = [23,342,54,23,5,6,45,56,73,2,4,636,34];
insertSort2(testArr);
console.log(testArr);

function insertSort3(arr){
    //2-路插入排序也不可避免的需要移动元素,
    //要想完全的避免移动元素只能使用链表
    //这里以静态链表的形式作为演示
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

