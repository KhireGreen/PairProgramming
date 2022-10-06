function areAnagram(str1, str2) {
    let n1 = str1.length; //get the length of string 1
    let n2 = str2.length; // get the length of string 2

    
    if (n1 != n2) // if they are not anagrams, then it will return false
        return false;

    
    str1.sort(); // sorts string 1
    str2.sort() // sorts string 2

    
    for (let i = 0; i < n1; i++) // this compares string 1 to string 2
        if (str1[i] != str2[i])
            return false;

    return true;
}


let str1 = ['k', 'h', 'i', 'r', 'e']; // string 1
let str2 = ['g', 'r', 'e', 'e', 'n']; // string 2


if (areAnagram(str1, str2))
    console.log(`${str1} and ${str2} are anagrams`);
else
    console.log(`${str1} and ${str2} are NOT anagrams`);