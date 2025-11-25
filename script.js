'use strict';

// Method → obyektning belgilangan vazifalarini bajarish uchun mo’ljallangan funksiyadir.

//  Number methodlar

// Math.round() → sonni eng yaqin butun songa yaxlitlaydi, agar o‘nlik qism 0.5 yoki undan katta bo‘lsa, raqam yuqoriga, aks holda pastga yaxlitlanadi.
// let son = 7.3;
// console.log(Math.round(son));


// Vazifa:
// let arr = [2.4, 3.6, 4.5, 5.9];
// let sum = 0;

// for (let i = 1; i <= arr.length; i++) {
//     let yaxlit = Math.round(arr[i-1])
//     sum += yaxlit;
// }
// console.log(sum);

// let arr = [2.4, 3.6, 4.5, 5.9];
// let count = 0;

// for (let i = 1; i <= arr.length; i++) {
//     let yaxlit = Math.round(arr[i-1])
//     if (yaxlit % 2 === 0) {
//         count++;
//     }
// }
// console.log(count);


// toFixed() → sonning kasr qismini belgilangan raqamgacha qisqartirib yaxlitlaydi va natijani string sifatida qaytaradi.
// let son = 4.78391;
// console.log(son.toFixed(2));

// Vazifa:
let son = 13;
let son2 = 'suz';
if (!isNaN(son) && !isNaN(son2)) {
    console.log(son1 + son2);   
} else {
    console.log('Iltimos, faqat raqam kiriting!');
}