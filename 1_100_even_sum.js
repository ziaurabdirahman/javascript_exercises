// print out 1 to 100 even number sum

var sum = 0;
for (i = 2; i <= 100; i = i + 2) {
  console.log(sum + ' + ' + i + ' = ' + (sum + i))
  sum = sum + i
}
console.log('Sum is: ' + sum)