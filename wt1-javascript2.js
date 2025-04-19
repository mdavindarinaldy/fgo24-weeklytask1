//input

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Berapa total belanja Anda : ", function calculate(total) {
    let diskon = 0
    total = Number(total)
    // console.log(typeof total) // cek tipe data variabel total
    if (total >= 1000000) {
        diskon = 0.1
    } else if (total >= 500000 && total <1000000){
        diskon = 0.05
    } else {
        diskon = 0
    }
    
    let price = total - (total * diskon)
    
    if (diskon > 0) {
        console.log(`Anda mendapatkan diskon sebesar ${diskon*100}%, total belanja anda menjadi Rp ${price}`)
    } else {
        console.log(`Anda tidak mendapatkan diskon, total belanja anda Rp ${price}`)
    }
    rl.close()
})
