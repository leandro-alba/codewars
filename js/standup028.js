//standup028
// wednesday 12/07/2022, @ 6pm remo.co  NOTE*** it wednesdays standup got moved to today, 12/08/2022 becuase wednesday was RC Demo day.
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 
//to brute force this use nested loops
function maxCharacter(str){
    let charMap = {}
    count = 0
    maxChar = null

    for(const char of str){
        charMap[char] = charMap[char] + 1 || 1 // charMap[char] can also be written in dot notation -> charMap.char
    }

    for(const char in charMap){
        if(charMap[char] > count){
            count = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}