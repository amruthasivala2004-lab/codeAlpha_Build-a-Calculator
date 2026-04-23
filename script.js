let display = document.getElementById("display");

// Add values
function appendValue(value) {
  display.value += value;
  liveCalculate();
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
  liveCalculate();
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Real-time result (bonus)
function liveCalculate() {
  try {
    if (display.value !== "") {
      let result = eval(display.value);
      if (result !== undefined) {
        console.log("Live result:", result);
      }
    }
  } catch {}
}

/* Keyboard support */
document.addEventListener("keydown", function(event) {
  if ((event.key >= '0' && event.key <= '9') || "+-*/.".includes(event.key)) {
    appendValue(event.key);
  } 
  else if (event.key === "Enter") {
    calculate();
  } 
  else if (event.key === "Backspace") {
    deleteLast();
  } 
  else if (event.key === "Escape") {
    clearDisplay();
  }
});