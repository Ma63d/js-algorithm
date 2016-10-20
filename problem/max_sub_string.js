/**
 * Created by chuck7 on 16/10/19.
 */
/**
* 见博客 http://chuckliu.me/#!/posts/580738e738b9247efecb67f1
* 最大子串和问题
* */
function maxSubString(a){
    // 已经不用b数组了
    // 直接用一个变量b就可以了,因为只需要上一次的b
    // 当b比maxSum大时,maxSum = b即可,这样一趟遍历下来,
    // maxSum就是原文所说的b数组的最大值
    if(a.length < 1){
        return -Infinity;
    }
    var b,maxSum,j;
    b = maxSum = a[0];
    for(j = 1;j < a.length;j++){
        if(b > 0){
            b += a[j];
        }else{
            b = a[j];
        }
        if(b > maxSum)
            maxSum = b;

    }
    return maxSum;
}
console.log(maxSubString([-10,-2,-2,7,-1,-5,7,-5]))