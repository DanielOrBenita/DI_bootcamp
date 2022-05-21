// gold
//1
// let blankword = ""
// let word = 'abc'


// let wordChecker = (param) => {
//     if (param.length === "") {
//         return (true)
//     } else {
//         return (false)
//     }
// }
// console.log(wordChecker(word))

//2

// let fullname = "Robin Singh"

// let namechanger = (name) => {

//     let ChangedName = name.split(` `)
//     ChangedName[1] = ChangedName[1].slice(0, 1)
//     ChangedName = ChangedName.join(` `)
//     console.log(ChangedName)

// }


// namechanger(fullname)

//3

fullname = `Daniel Benita`;

let changer = (param) => {
    let result = param.split('');
    result = result.map(e => {
        if (e.toUpperCase() == e) {
            return e.toLowerCase()
        } else {
            if (e.toLowerCase() == e) {
                return e.toUpperCase()
            }
        }
    })

    result = result.join(``)

    console.log(result)


}
changer(fullname)

