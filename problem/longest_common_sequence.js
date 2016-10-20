/**
 * Created by chuck7 on 16/10/20.
 */
function _matrixPnR(a,b){
    //建立p矩阵
    //r矩阵用来记录当前p[i][j]是根据什么得到的
    //如果是根据p[i-1][j-1]+1得到,则r[i][j]记录为0;
    //如果是p[i-1][j]则记录为1,若p[i][j-1]则记录2
    var lenA = a.length,lenB = b.length;
    var p = [],r = [];

    for (var i = 0; i <= lenA; i++) {
        p[i] = [];
        r[i] = [];
        for( var j = 0; j <= lenB; j++) {
            if(i == 0 || j == 0) {
                p[i][j] = 0;
            } else if (a[i-1] == b[j-1]) {
                p[i][j] = p[i-1][j-1] + 1;
                r[i][j] = 0;
            } else {
                if(p[i - 1][j] >= p[i][j-1]){
                    p[i][j] = p[i-1][j];
                    r[i][j] = 1;
                }else{
                    p[i][j] = p[i][j-1];
                    r[i][j] = 2;
                }
            }
        }
    }
    //console.table(p);
    //console.table(r);
    return {r:r,p:p};
}
function _getLCS(a,r,i,j,result){
    if(i == 0 || j == 0)
        return;
    if(r[i][j] == 0){
        _getLCS(a, r, i-1, j-1,result);
        result.push(a[i-1])
    } else if(r[i][j] == 1) {
        _getLCS(a, r, i - 1, j,result);
    }
    else {
        _getLCS(a, r, i, j - 1,result);
    }
}
function lcs(a,b){
    var obj = _matrixPnR(a,b);
    var result = [];
    _getLCS(a, obj.r, a.length, b.length,result);
    return (result.join(''));
}
console.log(lcs('ABCBDAB','BDCABA'))
