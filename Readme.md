### 1️⃣ What is the difference between var, let, and const?

`var`, `let`, এবং `const` JavaScript এ variable declare করার জন্য ব্যবহার করা হয়।

* **var** পুরোনো পদ্ধতি। এটা redeclare এবং update করা যায়।
* **let** নতুন পদ্ধতি। এটা update করা যায় কিন্তু একই জায়গায় আবার declare করা যায় না।
* **const** দিয়ে declare করলে সেই variable এর value পরে change করা যায় না।

---

### 2️⃣ What is the spread operator (...)?

Spread operator `...` ব্যবহার করা হয় array বা object এর সব value এক জায়গা থেকে আরেক জায়গায় copy বা combine করার জন্য।

উদাহরণ:

```javascript
const numbers = [1,2,3]
const newNumbers = [...numbers,4,5]
```

---

### 3️⃣ What is the difference between map(), filter(), and forEach()?

এগুলো array এর উপর কাজ করার জন্য ব্যবহার করা হয়।

* **map()** → প্রতিটা element এর উপর কাজ করে নতুন array তৈরি করে
* **filter()** → condition অনুযায়ী কিছু element রেখে নতুন array তৈরি করে
* **forEach()** → শুধু loop চালায়, নতুন array return করে না

---

### 4️⃣ What is an arrow function?

Arrow function হলো JavaScript এ function লেখার ছোট এবং সহজ উপায়।
এটা `=>` চিহ্ন ব্যবহার করে লেখা হয়।

উদাহরণ:

```javascript
const add = (a,b) => a + b
```

---

### 5️⃣ What are template literals?

Template literals ব্যবহার করে string এর মধ্যে সহজে variable ব্যবহার করা যায়।

এটা backtick `` ` ` `` ব্যবহার করে লেখা হয়।

উদাহরণ:

```javascript
const name = "Rahim"

console.log(`Hello ${name}`)
```
