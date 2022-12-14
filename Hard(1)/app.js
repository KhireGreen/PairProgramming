// // // Hard (1)

function checkMatchingBrackets(str) {
    const holder = []
    const openBrackets = ['(', '{', '[']
    const closedBrackets = [')', '}', ']']
    for (let letter of str) { // loop trought all letters of str
        if (openBrackets.includes(letter)) { // if its oppening bracket
            holder.push(letter)
        } else if (closedBrackets.includes(letter)) { // if its closing
            const openPair = openBrackets[closedBrackets.indexOf(letter)] // find its pair
            if (holder[holder.length - 1] === openPair) { // check if that pair is the last element in the array
                holder.splice(-1, 1) // if so, remove it
            } else { // if its not
                holder.push(letter)
                break // exit loop
            }
        }
    }
    return (holder.length === 0) // return true if length is 0, otherwise false
}
console.log(checkMatchingBrackets('{hello world]'))//true
