// what result you get
// take the mark from user
// use node -- readline -- built in api

//using built in api
const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// take value from user
r1.question('Please give your mark: ', (value) => {
    const mark = value
    console.log(`Your given mark is: ${mark}`)

    // creating a space
    console.log('')

    // check is the value is number
    if (isNaN(mark)) {
        console.log('Only Numbers are excepted.')
    }

    // check empty value
    if (mark === '') {
        console.log('Please give a value. Your input cannot be empty.')
    }

    // check the marks
    // A +
    if ((mark >= 80 && mark <= 100)) {
        console.log('Congrats! You got GPA A+.')
    }

    // A
    if (mark >= 70 && mark < 80) {
        console.log('You got A')
    }

    // A -
    if (mark >= 60 && mark < 70) {
        console.log('You got A -')
    }

    // B 
    if (mark >= 50 && mark < 60) {
        console.log('You got B')
    }

    // C
    if (mark >= 40 && mark < 50) {
        console.log('You got C')
    }

    // D
    if (mark >= 33 && mark < 40) {
        console.log('You got D')
    }

    // failed
    if (mark > 0 && mark < 33) {
        console.log('You are failed!')
    }

    // check the value is under 0 to 100
    if (mark < 0 || mark > 100) {
        console.log('The value is not excepted a result.')
    }

    r1.close()
})

