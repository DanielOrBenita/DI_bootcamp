class video {
    constructor(title, uploader, time) {
        this.title = title,
            this.uploader = uploader,
            this.time = time
    }

    watch() {
        return (`${this.title} watched all ${this.uploader} of ${this.time}`)
    }
}

const user = new video("AmericanPie", "Almog", 1);
console.log(user.watch());

const user2 = new video("Matrix", " Yossi", 2);
console.log(user2.watch());
const user3 = new video("Find nemmo", " Anael", 3);
console.log(user3.watch());
const user4 = new video("midnight express", " jacob", 4);
console.log(user4.watch());
const user5 = new video("Armagedon", " michael", 5);
console.log(user5.watch());

let arr = [

]
arr.push(user, user2, user3, user4, user5)
console.log(arr)