//solution214
function ave(x){
    return (x.reduce(el=>el+el)/x.length)*.8
}
console.log(ave([369,450,236,359,222,978,78,612,600,49,12,888,1389,742,34,626,48,22,12016,72,606,48,222,441,14,12,16]))