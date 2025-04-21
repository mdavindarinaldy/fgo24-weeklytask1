const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let isComplete = false

// Nomor 1 - printSquare
function printSquare(x) {
    if (typeof x == "number" && x >0) {
        for (let i=1; i<=x; i++) {
            let temp = ""
            for (let j=1; j<=x; j++) {
                temp = temp + j + " "
            }
            console.log(temp)
        }
    } else {
        console.log("Data yang dimasukkan harus angka")
    }
    isComplete = true
    return (isComplete)
} 

// Nomor 2 - Array
function array() {
    const arr1 = [1,2,3]
    const arr2 = [4,5,6]

    const arr3 = [...arr1, ...arr2]

    console.log(arr3)
}

rl.question(`Masukkan angka anda : `, function calc(x){
    x = Number(x)
    printSquare(x)
    array()
    rl.close()
})
