# 🧠 JavaScript Day 9 — Number Methods

Bu darsda men **JavaScript’da Number Methodlar bilan ishlashni** o‘rgandim.  
Amaliy misollar orqali Number Methodlarini qanday e’lon qilinishi va ishlash tartibini mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

## 📚 O‘rganganlarim / What I learned
**Number Methods (Raqamlar bilan ishlash usullari)**

Bu darsda men JavaScript’dagi **Number methodlar** bilan tanishdim.  
Ushbu methodlar sonlar ustida turli amallarni bajarishga yordam beradi.  

### Asosiy methodlar:
- `toString()` – sonni stringga o‘zgartiradi.
- `toFixed(n)` – sonni `n` kasr raqamgacha yaxlitlaydi va string qaytaradi.
- `parseInt()` – stringni butun songa o‘zgartiradi.
- `parseFloat()` – stringni o‘nlik son (decimal)ga o‘zgartiradi.
- `Number()` – string yoki booleanni songa o‘zgartiradi.
- `isNaN()` – qiymat son emasligini tekshiradi.
- `valueOf()` – Number objectdan primitive number qiymatni oladi.

### Misol:
```javascript
let num = 12.3456;

console.log(num.toFixed(2)); // "12.35"
console.log(num.toString()); // "12.3456"
console.log(Number("123"));  // 123
console.log(parseInt("45px")); // 45
console.log(parseFloat("3.14abc")); // 3.14


### 1️⃣ Function Declaration  
```javascript
function name(parameters) {
    // code
}
```
✔️ Funksiyani chaqirishni oldin ham, keyin ham ishlatish mumkin.

---

### 2️⃣ Function Expression  
```javascript
const name = function(parameters) {
    // code
};
```
✔️ Funksiya o‘zgaruvchiga tenglanadi.  
✔️ Avval e’lon qilinishi kerak.

---

### 3️⃣ Arrow Function  
```javascript
const name = (parameters) => {
    // code
};
```
✔️ Zamonaviy, ixcham va qisqa sintaksis.

---

## 💻 Kod namunasi / Example code

Kiritilgan sondan boshlab `1` gacha bo‘lgan sonlar yig‘indisini hisoblash:

### 🔹 Arrow Function
```javascript
const calculateSum = (num) => {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
};

console.log(calculateSum(5)); // 15
```

### 🔹 Function Declaration
```javascript
function calculateSum(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
}

console.log(calculateSum(5)); // 15
```

### 🔹 Function Expression
```javascript
const calculateSum = function(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
};

console.log(calculateSum(5)); // 15
```

---

## 🧩 Qisqacha nazariya / Short Theory

- Funksiya — qayta ishlatiladigan kod bloki.
- Parametrlar orqali funksiya ichiga qiymat uzatish mumkin.
- `return` funksiyadan natija qaytaradi.
- JavaScript’da funksiyalarni 3 xil uslubda yozish mumkin:
  - Function Declaration  
  - Function Expression  
  - Arrow Function

---

## 🎯 Maqsad / Goal

- Funksiyalarning qanday ishlashini o‘rganish  
- Ularni real misollarda qo‘llash  
- Uch xil yozilish uslubida funksiyalarni amalda sinab ko‘rish

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 7-kun — Functions
