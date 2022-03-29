let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//1
let  myWatchedSeriesLength = (myWatchedSeries.length);
console.log(myWatchedSeriesLength)

//2
let myWatchedSeriesSentence = (myWatchedSeries.join())
console.log(myWatchedSeriesSentence)

//3

console.log(`i watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`)

//part 2
console.log(myWatchedSeries.indexOf("the big bang theory"))
myWatchedSeries[2] = "friends"
console.log (myWatchedSeries)

//2
myWatchedSeries.push("lucifer")
console.log (myWatchedSeries)

//3
myWatchedSeries.splice(0,0, "naruto")
console.log(myWatchedSeries)



//4
console.log(myWatchedSeries.indexOf("black mirror"))
myWatchedSeries.splice(1,1);
console.log (myWatchedSeries)

//5
console.log(myWatchedSeries.indexOf("money heist"))
console.log(myWatchedSeries[1].charAt(2))

//6
console.log(myWatchedSeries)


