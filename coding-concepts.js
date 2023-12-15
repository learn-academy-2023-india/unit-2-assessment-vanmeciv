// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: "I n d i a  2 0 2 3"
// b) Verify and explain: [ 'India', '2023' ]
// .split() is a built-in method that will take the " " as a parameter that inserts a comma at each space

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: the greeter variable has no previous definition

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will log only odd numbers, hence the name of the variable onlyOdds and the equation that returns only numbers that have remainders.
// b) Verify and explain: [ 11, 13, 15 ]

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: Line 44 is logging the myCodingSkills Object using the languagues key at the [0] index.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George"
// b) Verify and explain: 
// Learn { student: 'George', cohort: 'India', year: 2023 }
// It's instantiating the "George" student object from the Learn Class
