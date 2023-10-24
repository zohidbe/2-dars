 //type conversion
 //string, boleean => number
//Nan => Not a Num.ber
// let a = 1234.56
//Number() constructor function
// console.log (perseFloat (a))
// console.log (parseInt(a))
// console.log (+a);
// console.log (-a)
// console.log (a * 1)
// console.log (a / 1 )
// console.log (a - 0 )
// console.log (3 + a)

// operators
//Arihmetic 
// + - * / % ++ -- ** // => coments 

// console.log (10 % 3)
// let a = 1;
// console.log (a)
// console.log (++a)
// console.log (a)
// console.log (a)
// console.log(--a)
// console.log (a)
// console.log (2 ** 8)
// console.log (2 // 4 )

//comparison 
// (Taqoshlash)
// > < <= >= == === != !===

// console.log (1 > 2 )
// console.log (1 < 2)
// console.log (1 < 2 )
// console.log (1 <= 1  )
// console.log ( 1 >= 1) 
// console.log (1 >1 )
// console.log (1 < 2 )


var tugilgan_sanat = prompt("Tug'ilgan san'atingizni kiriting (masalan, 1990):");
var yoshga_kirish_sanati = prompt("3 yil keyin qaysi yoshga kirishingizni kiriting:");

var joriy_sanat = new Date().getFullYear();
var yosh = joriy_sanat - tugilgan_sanat;

var yoshga_kirish_sanat = parseInt(yoshga_kirish_sanati) + parseInt(tugilgan_sanat);
var qancha_vaqt_qolgan = yoshga_kirish_sanat - joriy_sanat;


console.log("Siz " + yosh + " yoshdasiz.");
console.log("3 yil keyin " + yoshga_kirish_sanati + " yoshga kirishingiz kerak.");
console.log("Siz " + qancha_vaqt_qolgan + " yil vaqt ichida " + yoshga_kirish_sanati + " yoshga kirishingiz kerak.");
