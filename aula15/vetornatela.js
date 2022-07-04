var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
/*for(var pos = 0; pos <= num.length; pos++){
    console.log(`${pos}`)
}*/

for (var pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(30))