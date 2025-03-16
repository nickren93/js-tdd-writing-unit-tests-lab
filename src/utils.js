// Your code here

export function isPalindrome(word){
    const reversedWordArray = []

    for (const char of word) {
        reversedWordArray.unshift(char)
    }

    const reversedWord = reversedWordArray.join("")
    /*
    if(word == ""){
        return false
    }
    else 
    */
    
    if(word == ""){
        return false
    }else if(!(/^[A-Za-z]+$/.test(word))){
        throw new Error('The word provide is non-alphabetic character! Please try again');
    } else if(word.toLowerCase() == reversedWord.toLowerCase()){
        return true
    }else{
        return false
    }
}
