## Program Menu

```mermaid
flowchart TD
A((Mulai))
B@{shape: rect, label: "basket = { item: [], 
price: 0 }"}
C@{shape: rect, label: "const foods = [{ }, { }]
const drinks = [{ }, { }]
const snacks = [{ }, { }]
const desserts = [{ }, { }]"}
D@{shape: rect, label: "Pemanggilan function mainMenu()"}

A-->B-->C-->D
```

## Function errorMessage
```mermaid
flowchart LR
emA@{shape: circ, label: "Mulai"}
emB@{shape: lean-r, label: "'Jawaban Invalid - Dikembalikan ke Menu Utama'"}
emC@{shape: rect, label: "pemanggilan function mainMenu()"}

emA --> emB --> emC
```

## Function mainMenu
```mermaid
flowchart TD
mmA@{shape: circ, label: "Mulai"}
mmB@{shape: lean-r, label: "'Menu Utama
1. Lihat Menu
2. Lihat Keranjang
3. Checkout
Tekan Nomor [1-3] : '"}
mmC@{shape: lean-r, label: "input1"}
mmC1@{shape: diamond, label: "input1==1"}
mmC1a@{shape: lean-r, label: "'Menu 
1. Makanan
2. Minuman
3. Snacks
4. Desserts
0. Kembali ke Menu Utama
Tekan Nomor [0-4] : '"}
mmC1b@{shape: lean-r, label: "input2"}

mmC2@{shape: diamond, label: "input1==2"}
mmC2a@{shape: rect, label: "pemanggilan function viewBasket()"}
mmC3@{shape: diamond, label: "input1==3"}
mmC3a@{shape: rect, label: "pemanggilan function checkOut()"}
mmC4@{shape: lean-r, label: "'Jawaban Invalid - Mohon Tekan Nomor [1-3]'"}
mmC4a@{shape: rect, label: "pemanggilan function mainMenu()"}

mmD@{shape: diamond, label: "input2==1"}
mmDA@{shape: rect, label: "pemanggilan function foodsMenu()"}
mmE@{shape: diamond, label: "input2==2"}
mmEA@{shape: rect, label: "pemanggilan function drinksMenu()"}
mmF@{shape: diamond, label: "input2==3"}
mmFA@{shape: rect, label: "pemanggilan function snacksMenu()"}
mmG@{shape: diamond, label: "input2==4"}
mmGA@{shape: rect, label: "pemanggilan function dessertsMenu()"}
mmH@{shape: rect, label: "pemanggilan function errorMessage()"}

mmA --> mmB --> mmC --> mmC1 
mmC1 --Ya--> mmC1a --> mmC1b --> mmD
mmC1 --Tidak--> mmC2 --Ya--> mmC2a
mmC2 --Tidak--> mmC3 --Ya--> mmC3a
mmC3 --Tidak--> mmC4 --Ya--> mmC4a

mmD --Ya--> mmDA
mmD --Tidak--> mmE --Ya--> mmEA
mmE --Tidak--> mmF --Ya--> mmFA
mmF --Tidak--> mmG --Ya--> mmGA
mmG --Tidak--> mmH
```

## Function foodsMenu
```mermaid
flowchart TD
fmA@{shape: circ, label: "Mulai"}
fmB@{shape: lean-r, label: "Makanan
1. Nasi Goreng
2. Mie Goreng
3. Seblak
4. Bakso
5. Nasi Uduk
0. Kembali ke Menu Utama
Tekan Nomor [0-5] : "}
fmC@{shape: lean-r, label: "input1"}
fmC1@{shape: diamond, label: "input1==0"}
fmC1a@{shape: rect, label: "pemanggilan function mainMenu()"}

fmC2@{shape: diamond, label: "input1>1 && input1 <=5>"}
fmC2a@{shape: lean-r, label: "`Apakah yakin untuk memesan ${foods[input1-1].type} dengan harga Rp ${foods[input1-1].price}? Jawab Ya/Tidak : '"}
fmC2b@{shape: lean-r, label: "input2"}
fmC2c@{shape: diamond, label: "input2=='Ya'"}

fmD@{shape: diamond, label: "input2=='Tidak'"}
fmD1@{shape: rect, label: "pemanggilan function foodsMenu()"}
fmD2@{shape: rect, label: "pemanggilan function errorMessage()"}

fmC2ca@{shape: rect, label: "basket.item = [...basket.item, foods[input1-1].type]
basket.price = basket.price + foods[input1-1].price"}
fmC2cb@{shape: lean-r, label: "'${foods[input1-1].type} berhasil ditambahkan'"}
fmC2cc@{shape: rect, label: "pemanggilan function mainMenu()"}

fmA --> fmB --> fmC --> fmC1 --Ya--> fmC1a
fmC1 --Tidak--> fmC2 --Ya--> fmC2a --> fmC2b --> fmC2c
fmC2c --Ya--> fmC2ca --> fmC2cb --> fmC2cc
fmC2c --Tidak--> fmD --Ya--> fmD1
fmD --Tidak--> fmD2
fmC2 --Tidak--> fmD2
```

## Function drinksMenu
```mermaid
flowchart TD
fmA@{shape: circ, label: "Mulai"}
fmB@{shape: lean-r, label: "Minuman
1. Es Teh
2. Es Jeruk
3. Es Teh Tarik
4. Es Kelapa Muda
5. Kopi
0. Kembali ke Menu Utama
Tekan Nomor [0-5] : "}
fmC@{shape: lean-r, label: "input1"}
fmC1@{shape: diamond, label: "input1==0"}
fmC1a@{shape: rect, label: "pemanggilan function mainMenu()"}

fmC2@{shape: diamond, label: "input1>1 && input1 <=5>"}
fmC2a@{shape: lean-r, label: "`Apakah yakin untuk memesan ${drinks[input1-1].type} dengan harga Rp ${drinks[input1-1].price}? Jawab Ya/Tidak : '"}
fmC2b@{shape: lean-r, label: "input2"}
fmC2c@{shape: diamond, label: "input2=='Ya'"}

fmD@{shape: diamond, label: "input2=='Tidak'"}
fmD1@{shape: rect, label: "pemanggilan function drinksMenu()"}
fmD2@{shape: rect, label: "pemanggilan function errorMessage()"}

fmC2ca@{shape: rect, label: "basket.item = [...basket.item, drinks[input1-1].type]
basket.price = basket.price + drinks[input1-1].price"}
fmC2cb@{shape: lean-r, label: "'${drinks[input1-1].type} berhasil ditambahkan'"}
fmC2cc@{shape: rect, label: "pemanggilan function mainMenu()"}

fmA --> fmB --> fmC --> fmC1 --Ya--> fmC1a
fmC1 --Tidak--> fmC2 --Ya--> fmC2a --> fmC2b --> fmC2c
fmC2c --Ya--> fmC2ca --> fmC2cb --> fmC2cc
fmC2c --Tidak--> fmD --Ya--> fmD1
fmD --Tidak--> fmD2
fmC2 --Tidak--> fmD2
```

## Function snacksMenu
```mermaid
flowchart TD
fmA@{shape: circ, label: "Mulai"}
fmB@{shape: lean-r, label: "Snacks
1. Kerupuk Udang
2. Pangsit Goreng
3. Bika Ambon
4. Lemper
5. Putu Ayu
0. Kembali ke Menu Utama
Tekan Nomor [0-5] : "}
fmC@{shape: lean-r, label: "input1"}
fmC1@{shape: diamond, label: "input1==0"}
fmC1a@{shape: rect, label: "pemanggilan function mainMenu()"}

fmC2@{shape: diamond, label: "input1>1 && input1 <=5>"}
fmC2a@{shape: lean-r, label: "`Apakah yakin untuk memesan ${snacks[input1-1].type} dengan harga Rp ${snacks[input1-1].price}? Jawab Ya/Tidak : '"}
fmC2b@{shape: lean-r, label: "input2"}
fmC2c@{shape: diamond, label: "input2=='Ya'"}

fmD@{shape: diamond, label: "input2=='Tidak'"}
fmD1@{shape: rect, label: "pemanggilan function snacksMenu()"}
fmD2@{shape: rect, label: "pemanggilan function errorMessage()"}

fmC2ca@{shape: rect, label: "basket.item = [...basket.item, snacks[input1-1].type]
basket.price = basket.price + snacks[input1-1].price"}
fmC2cb@{shape: lean-r, label: "'${snacks[input1-1].type} berhasil ditambahkan'"}
fmC2cc@{shape: rect, label: "pemanggilan function mainMenu()"}

fmA --> fmB --> fmC --> fmC1 --Ya--> fmC1a
fmC1 --Tidak--> fmC2 --Ya--> fmC2a --> fmC2b --> fmC2c
fmC2c --Ya--> fmC2ca --> fmC2cb --> fmC2cc
fmC2c --Tidak--> fmD --Ya--> fmD1
fmD --Tidak--> fmD2
fmC2 --Tidak--> fmD2
```

## Function dessertsMenu
```mermaid
flowchart TD
fmA@{shape: circ, label: "Mulai"}
fmB@{shape: lean-r, label: "Desserts
1. Strawberry Ice Cream
2. Cheesecake
3. Red Velvet Cake
4. Tiramisu Cake
5. Panna Cota
0. Kembali ke Menu Utama
Tekan Nomor [0-5] : "}
fmC@{shape: lean-r, label: "input1"}
fmC1@{shape: diamond, label: "input1==0"}
fmC1a@{shape: rect, label: "pemanggilan function mainMenu()"}

fmC2@{shape: diamond, label: "input1>1 && input1 <=5>"}
fmC2a@{shape: lean-r, label: "`Apakah yakin untuk memesan ${desserts[input1-1].type} dengan harga Rp ${desserts[input1-1].price}? Jawab Ya/Tidak : '"}
fmC2b@{shape: lean-r, label: "input2"}
fmC2c@{shape: diamond, label: "input2=='Ya'"}

fmD@{shape: diamond, label: "input2=='Tidak'"}
fmD1@{shape: rect, label: "pemanggilan function dessertsMenu()"}
fmD2@{shape: rect, label: "pemanggilan function errorMessage()"}

fmC2ca@{shape: rect, label: "basket.item = [...basket.item, desserts[input1-1].type]
basket.price = basket.price + desserts[input1-1].price"}
fmC2cb@{shape: lean-r, label: "'${desserts[input1-1].type} berhasil ditambahkan'"}
fmC2cc@{shape: rect, label: "pemanggilan function mainMenu()"}

fmA --> fmB --> fmC --> fmC1 --Ya--> fmC1a
fmC1 --Tidak--> fmC2 --Ya--> fmC2a --> fmC2b --> fmC2c
fmC2c --Ya--> fmC2ca --> fmC2cb --> fmC2cc
fmC2c --Tidak--> fmD --Ya--> fmD1
fmD --Tidak--> fmD2
fmC2 --Tidak--> fmD2
```

## Function viewBasket
```mermaid
flowchart TD
vbA@{shape: circ, label: "Mulai"}
vbAA@{shape: rect, label: "`len = basket.item.length
i = 0"}
vbB@{shape: lean-r, label: "'Keranjang: '"}
vbC@{shape: diamond, label: "i < len"}
vbD@{shape: lean-r, label: "'${i+1}. ${basket.item[i]}'"}
vbE@{shape: rect, label: "i++"}
vbF@{shape: lean-r, label: "`Total Harga: Rp ${basket.price}'"}
vbG@{shape: rect, label: "pemanggilan function mainMenu()"}

vbA --> vbAA --> vbB --> vbC --Ya--> vbD --> vbE --> vbC
vbC --Tidak--> vbF --> vbG  
```


## Function checkOut
```mermaid
flowchart TD
vbA@{shape: circ, label: "Mulai"}
vbAA@{shape: rect, label: "`len = basket.item.length
i = 0"}
vbB@{shape: lean-r, label: "'Menu yang dibeli: '"}
vbC@{shape: diamond, label: "i < len"}
vbD@{shape: lean-r, label: "'${i+1}. ${basket.item[i]}'"}
vbE@{shape: rect, label: "i++"}
vbF@{shape: lean-r, label: "`Total Harga: Rp ${basket.price}' Terima kasih sudah memesan!"}

vbA --> vbAA --> vbB --> vbC --Ya--> vbD --> vbE --> vbC
vbC --Tidak--> vbF --> vbG(((Selesai)))
```