// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {

  it("gives users double amount of points if their word is a palindrome", () => {
    const word = "mom"

    const result = isPalindrome(word)

    expect(result).toBe(true)
  })

  it("gives users double amount of points if their word is a palindrome", () => {
    const word = "racecar"

    const result = isPalindrome(word)

    expect(result).toBe(true)
  })

  it("gives users double amount of points if their word is a palindrome", () => {
    const word = "car"

    const result = isPalindrome(word)

    expect(result).toBe(false)
  })

  it("return true for words that are a combination of uppercase and lowercase letters when their word is a palindrome", () => {
    const word = "rACecaR"

    const result = isPalindrome(word)

    expect(result).toBe(true)
  })

  it("return false for an empty string", () => {
    const word = ""

    const result = isPalindrome(word)

    expect(result).toBe(false)
  })

  test(' throw an error if input has any non-alphabetic characters', () => {
    const word = '不是'
    //const result = isPalindrome(word)
    expect(()=>isPalindrome(word)).toThrow('The word provide is non-alphabetic character! Please try again')
  })
  
});