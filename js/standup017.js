//standup017
//11/15/22
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

function sortArray(arr){
    //we know we will sort, and grabbing odd numbers
    //filter -> sort -> map
    //const oddNums = arr.filter(n=> n %2 !== 0)//looking at each individual number in the arr, grabing all odd numbers
    //const oddNums = arr.filter(n=> n %2  !== 0).sort((a,b)=> a-b)//gives us sorted odd numbers, sorting in asc
    const oddNums = arr.filter(n=> n %2  !== 0).sort((a,b)=> b-a)//now sorting in dsc
    //return arr.map(n=> n %2 === 0 ? n : oddNums.shift())// looping through;map creating new arr and if its even just return that num, if its not even
    //shift(), its happenging in O(n) so it will cause complexitiy issues
    return arr.map(n=> n %2 === 0 ? n : oddNums.pop())// with add dsc ordering and pop(), this happens in linear 
}
console.log(sortArray([7, 1]))//[1,7]
console.log(sortArray([5, 8, 6, 3, 4]))//[3, 8, 6, 5, 4]