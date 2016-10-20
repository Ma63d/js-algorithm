/**
 * Created by chuck7 on 16/10/20.
 */
function liss(a){
    //最长递增子序列
    //lenOfLISS[i]用来存储以第i个节点为结尾元素的最长子序列的长度
    //pre[i]存储上述子序列中在i节点之前的那个节点的位置 当pre[i] = i说明这个子序列长度为1
    var lenOfLISS = [],pre = [],lastPos = 0;
    var max = 1;
    for(var i = 0;i < a.length;i++){
        lenOfLISS[i] = 1;
        pre[i] = i;
    }
    for(i =1;i < a.length;i++){
        for(var j = 1;j < i;j++){
            //遍历前i-1个最长子序列
            if(a[i] > a[j] && lenOfLISS[i] < (lenOfLISS[j] + 1)){
                lenOfLISS[i] = lenOfLISS[j] + 1;
                pre[i] = j;
                if(lenOfLISS[i] > max){
                    max = lenOfLISS[i];
                    lastPos = i;
                }
            }
        }
    }
    var result = [];
    i = max;
    while(i){
        result[i-1] = a[lastPos];
        lastPos = pre[lastPos];
        i--;
    }
    console.log('最长子序列:'+result);
    console.log('最长子序列长度:'+max);
    return result;
}
liss([35, 36, 39, 3, 15, 27, 6, 42])