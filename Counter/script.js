const decrementbtn = document.getElementById("btn1");
const resetbtn = document.getElementById("btn2");
const incrementbtn = document.getElementById("btn3");
const value = document.getElementById("value");

btn1.addEventListener("click", function () {
  value.textContent = decrement();
});

btn2.addEventListener("click", function () {
  value.textContent = reset();
});

btn3.addEventListener("click", function () {
  value.textContent = increment();
});

function decrement() {
  let currentValue = parseInt(value.textContent);
  if (!isNaN(currentValue) && currentValue > 0) {
    return currentValue - 1;
  } else {
    return "Cannot store negative number.";
  }
}

function increment() {
  let currentValue = parseInt(value.textContent);
  if (!isNaN(currentValue)) {
    return currentValue + 1;
  } else {
    return 1;
  }
}

function reset() {
  let currentvalue = parseInt(value.textContent);
  return (currentvalue = 0);
}
