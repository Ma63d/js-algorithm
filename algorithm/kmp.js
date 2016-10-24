/**
 * Created by chuck7 on 16/10/23.
 */
function getNext(s){
    var next = [-1,0],j = 0,i = 1;
    while(i < s.length-1){
        if(j < 0 || s[i] == s[j]){
            //next[++i] = ++j;
            //相比于上面这1句代码,下面的6句代码是一种改进措施
            //避免在匹配"aaaab"时当无法与b匹配上时,还要去匹配倒数第4、第3、第2、第1个a,应该直接去匹配第一个a
            ++i;
            ++j;
            if(s[i] != s[j]){
                next[i] = j;
            }else{
                next[i] = next[j];
            }
        }else{
            j = next[j];
        }
    }
    return next;
}
function kmp(a,templateS,i){
    //对于字符串a,找出从位置i开始的与模式串templateS匹配的子串
    var next = getNext(a);
    var j = -1;
    while(i< a.length && j < templateS.length){
        if(j < 0 || a[i] == templateS[j]){
            ++i;
            ++j
        }else{
            j = next[j]
        }
    }
    if(j == templateS.length){
        return i - templateS.length;
    }
    return -1;
}