const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let basket = {
    item: [],
    price: 0
}

const foods = [
   { type: "Nasi Goreng", price: 17000 }, 
   { type: "Mie Goreng", price: 10000 }, 
   { type: "Seblak", price: 15000 }, 
   { type: "Bakso", price: 20000 }, 
   { type: "Nasi Uduk", price: 11000 }, 
]

const drinks = [
    { type: "Es Teh", price: 3000 }, 
    { type: "Es Jeruk", price: 5000 }, 
    { type: "Es Teh Tarik", price: 7000 }, 
    { type: "Es Kelapa Muda", price: 10000 }, 
    { type: "Kopi", price: 5000 }, 
]

const snacks = [
    { type: "Kerupuk Udang", price: 4000 }, 
    { type: "Pangsit Goreng", price: 5000 }, 
    { type: "Bika Ambon", price: 5000 }, 
    { type: "Lemper", price: 3500 }, 
    { type: "Putu Ayu", price: 4500 }, 
]

const desserts = [
    { type: "Strawberry Ice Cream", price: 7000},
    { type: "Cheesecake", price: 22000},
    { type: "Red Velvet Cake", price: 25000},
    { type: "Tiramisu Cake", price: 24000},
    { type: "Panna Cota", price: 17000},
]

function errorMessage() {
    console.log("Jawaban Invalid - Dikembalikan ke Menu Utama")
    mainMenu()
}

function mainMenu() {
    console.log(`Menu Utama\n1. Lihat Menu\n2. Lihat Keranjang\n3. Checkout`)
    rl.question('Tekan Nomor [1-3] : ', function(input1) {
        if (input1==1) {
            console.log("Menu\n1. Makanan\n2. Minuman\n3. Snacks\n4. Desserts\n0. Kembali ke Menu Utama")
            rl.question('Tekan Nomor [0-4] : ', function(input2) {
                if (input2==1) { foodsMenu() }
                else if (input2==2) { drinksMenu() }
                else if (input2==3) { snacksMenu() }
                else if (input2==4) { dessertsMenu() }
                else if (input2==0) { mainMenu() }
                else { errorMessage() }
            })
        } else if (input1==2) { viewBasket() }
        else if (input1==3) { 
            checkOut() 
            rl.close() 
        } else {
            console.log("Jawaban Invalid - Mohon Tekan Nomor [1-3]")
            mainMenu()
        }
    })
}

function foodsMenu() {
    console.log('Makanan\n1. Nasi Goreng\n2. Mie Goreng\n3. Seblak\n4. Bakso\n5. Nasi Uduk\n0. Kembali ke Menu Utama')
    rl.question('Tekan Nomor [0-5] : ', function(input1) {
        if (input1==0) { mainMenu() }
        if (input1>0 && input1 <=5) {
            rl.question(`Apakah yakin untuk memesan ${foods[input1-1].type} dengan harga Rp ${foods[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") { 
                    basket.item = [...basket.item, foods[input1-1].type]
                    basket.price = basket.price + foods[input1-1].price
                    console.log(`${foods[input1-1].type} berhasil ditambahkan ke Keranjang`)
                    mainMenu()
                } else if (input2=="Tidak") { mainMenu() }
                else { errorMessage() }
            })
        }
        else { errorMessage() }
    })
}

function drinksMenu() {
    console.log('Minuman\n1. Es Teh\n2. Es Jeruk\n3. Es Teh Tarik\n4. Es Kelapa Muda\n5. Kopi\n0. Kembali ke Menu Utama')
    rl.question('Tekan Nomor [0-5] : ', function(input1) {
        if (input1==0) { mainMenu() }
        if (input1>0 && input1 <=5) {
            rl.question(`Apakah yakin untuk memesan ${drinks[input1-1].type} dengan harga Rp ${drinks[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") { 
                    basket.item = [...basket.item, drinks[input1-1].type]
                    basket.price = basket.price + drinks[input1-1].price
                    console.log(`${drinks[input1-1].type} berhasil ditambahkan ke Keranjang`)
                    mainMenu()
                } else if (input2=="Tidak") { mainMenu()}
                else { errorMessage() }
            })
        }
        else { errorMessage() }
    })
}

function snacksMenu() {
    console.log('Snacks\n1. Kerupuk Udang\n2. Pangsit Goreng\n3. Bika Ambon\n4. Lemper\n5. Putu Ayu\n0. Kembali ke Menu Utama')
    rl.question('Tekan Nomor [0-5] : ', function(input1) {
        if (input1==0) { mainMenu() }
        if (input1>0 && input1 <=5) {
            rl.question(`Apakah yakin untuk memesan ${snacks[input1-1].type} dengan harga Rp ${snacks[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") { 
                    basket.item = [...basket.item, snacks[input1-1].type]
                    basket.price = basket.price + snacks[input1-1].price
                    console.log(`${snacks[input1-1].type} berhasil ditambahkan ke Keranjang`)
                    mainMenu()
                } else if (input2=="Tidak") { mainMenu()}
                else { errorMessage() }
            })
        }
        else { errorMessage() }
    })
}

function dessertsMenu() {
    console.log('Desserts\n1. Strawberry Ice Cream\n2. Cheesecake\n3. Red Velvet Cake\n4. Tiramisu Cake\n5. Panna Cota\n0. Kembali ke Menu Utama')
    rl.question('Tekan Nomor [0-5] : ', function(input1) {
        if (input1==0) { mainMenu() }
        else if (input1>0 && input1 <=5) {
            rl.question(`Apakah yakin untuk memesan ${desserts[input1-1].type} dengan harga Rp ${desserts[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") { 
                    basket.item = [...basket.item, desserts[input1-1].type]
                    basket.price = basket.price + desserts[input1-1].price
                    console.log(`${desserts[input1-1].type} berhasil ditambahkan ke Keranjang`)
                    mainMenu()
                } else if (input2=="Tidak") { mainMenu() }
                else { errorMessage() }
            })
        } 
        else { errorMessage() }
    })
}

function viewBasket() {
    let len = basket.item.length
    console.log(`Keranjang:`)
    for (let i = 0; i < len; i++) {
        console.log(`${i+1}. ${basket.item[i]}`)
    }
    console.log(`Total Harga: Rp ${basket.price}`)
    mainMenu()
}

function checkOut() {
    let len = basket.item.length
    console.log(`Menu yang dibeli:`)
    for (let i = 0; i < len; i++) {
        console.log(`${i+1}. ${basket.item[i]}`)
    }
    console.log(`Total Harga: Rp ${basket.price}\nTerima kasih sudah memesan!`)
}

mainMenu()