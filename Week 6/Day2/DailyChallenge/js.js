
const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1

const usernames = [];

gameInfo.forEach((name) => {
  usernames.push(name.username + "!");
});

console.log(usernames)
//3
const winners=[]

gameInfo.forEach((winner) => {
  winner.score > 5
   ? winners.push(winner.username)
   : undefined;
});

console.log(winners)
//3
const totalScores= []

gameInfo.forEach(score => {
totalScores.push(score.score)    
});

console.log(totalScores)

const totalScore = gameInfo.reduce((a, b) => a + b.score, 0);

console.log(totalScore)