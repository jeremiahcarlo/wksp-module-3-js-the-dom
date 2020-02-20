# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
setTimeout(function() {
    console.log("Hello")
}, 1000);
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
setInterval(function() {
    console.log('here!');
} 1000);

const myTimer = setInterval(function() {
    console.log('here!');
}, 1000);
//to stop interval
clearInterval(myTimer);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


