// print out what date is today
// An integer number, between 0 and 6, corresponding to the day of the week for    the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for      Tuesday, and so on.

var date = new Date()

var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default:
        console.log('This is not a valid day!')

}