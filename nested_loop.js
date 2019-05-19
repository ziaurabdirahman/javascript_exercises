/*
Problem:
1
1 2
1 2 3
1 2 3 4
*/

var n1 = 10
for (i = 1; i <= n1; i++) {
  result = ''
  for (j = 1; j <= i; j++) {
    result = result + j + ' ';
  }
  // console.log(result)
}


/*
Problem:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/


var n2 = 5
for (i = 1; i <= n2; i++) {
  var result = ''
  for (j = 1; j <= n2; j++) {
    result = result + '* '
  }
  console.log(result)
}