//solution138
//You are to write an function that takes a string as it's first paramter. This string will be a string of words.
//You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
//Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

function modifyMultiply(str,index,num){
    let divvy = str.split(' ')
    return (divvy[index]+'-').repeat(num).slice(0,-1)// we need the .slice(0,-1) at the end so our '-' doesnt appear at the end.
}

console.log(modifyMultiply('upbeat study music deep house mix for peak focus',2,2))//music-music
