let matchParenthesis = (input) => {
    let braces = "{}[]()"
    let stack = []

    for(let bracket of input){
        let bracketIndex = braces.indexOf(bracket)

        if(bracketIndex % 2 === 0){
            stack.push(bracketIndex + 1)
        } else {
            if(stack.pop() !== bracketIndex){
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log(matchParenthesis('{Hello World}'))
console.log(matchParenthesis('{Hello World)'))
