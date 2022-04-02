let myfamily = {
    daniel:{
        age:24,
        sex: `male`,
        eyeColor: `green`,
        awesome: true

    },

    roni:{
        age:17,
        sex: `female`,
        eyeColor: `brown`,
        awesome: true

    },

    mor:{
        age:12,
        sex: `male`,
        eyeColor: `brown`,
        awesome: true

    },
    shaar:{
        age:2,
        sex: `female`,
        eyeColor: `green`,
        awesome: true

    },
}

//2

for (let key in myfamily) {
    console.log(key); 
}

//3

for (let value in myfamily) {
    console.log(myfamily[value])
    }    