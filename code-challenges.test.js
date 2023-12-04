// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// detailed pseudo code with proper vocabulary terms []
// code that will output correct content in the terminal following best practices []
// "your answers" written in complete sentences the student's own words that provide correct answers []
// well researched and detailed answers written in complete sentences in the student's own words that provides additional context []

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// < -- Sarah Proctor worked in class -- >

// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// < -- Sarah Proctor worked in class -- >



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// Pseudo code:
// 1. if / else statement
// 2. is number % 3 === 0
// 3. yes return num 'is divisible by three'
// 4. else if return num 'is not divisible by three'

const isDivisibleByThree = (number) => {
    if (number % 3 === 0){
        return `${number} is divisible by three`
    } else if (number % 3 === 0) {
        return `${number} is not divisible by three`
    }
}

// console.log(isDivisibleByThree)


// --------------------2) Create a test with expect statements for each of the variables provided.
// Psuedo: 
// 1. describe("object1",() =>
// 2. it("a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.", () =>
// 3. { expect (object1(15) ).toEqual(TRUE)}

// const object1 = { number: 15 }
// Expected output: "15 is divisible by three" [X]

describe('isDivisibleByThree', () => {
    it('15 is divisible by three', () => {
      const object1 = { number: 15 }
      const result1 = isDivisibleByThree(object1.number)
      expect(result1)
    })
})
// Output --> 15 is divisible by three

// --------------------3)
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three" [X]


describe('isDivisibleByThree', () => {
    it('0 is divisible by three', () => {
      const object2 = { number: 0 }
      const result2 = isDivisibleByThree(object2.number)
      expect(result2)
    })
})
// Output --> 0 is divisible by three

// --------------------4)
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three" [X]


describe('isDivisibleByThree', () => {
    it('-7 is not divisible by three', () => {
      const object3 = { number: -7 }
      const result3 = isDivisibleByThree(object3.number)
      expect(result3)
    })
})
// Output --> -7 is not divisible by three


// b) Create the function that makes the test pass.

function multipliedByThree(number) {
    return number * 3 === 0
}

// --------------------4) Create a function that takes in an array of words and returns an array with all the words capitalized.
// Pseudo code:
// 1. func(arr[word1,word2,word3,word4])
// 2. return arr.allCaps.toUpperCase()

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]


const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

function isCapitalized(randomNouns1) {
    return randomNouns1.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
}

// a) Create a test with expect statements for each of the variables provided.

describe('isCapitalized', () => {
    it('is ingesting randomNouns and returning charAt(0) index to uppercase and concating to remainder of word using .slice()', () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const expectedOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        expect(isCapitalized(randomNouns1)).toEqual(expectedOutput1)
        
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        const expectedOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(isCapitalized(randomNouns2)).toEqual(expectedOutput2)
    })
})


// b) Create the function that makes the test pass.

const capitalizedWords = isCapitalized(randomNouns1)
// --> ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

console.log(capitalizedWords)

// console.log(randomNouns1)
// // --> ["hello", "hi", "yo"]
// console.log(randomNouns2)
// // --> ["hello", "hi", "yo"]
// console.log(result)
// --> ["S", "P", "T", "C", "N"]