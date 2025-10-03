let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.querySelector('.Instagram').addEventListener('click', function() {
  window.open('https://www.instagram.com/benuja_', '_blank');
});