const input = document.querySelector('input[type="number"]');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('div[id="boxes]');

let width = 30;

let hight = 30;


if (input.value < 1 || input.value > 100) {
  return "Error";
} else {
  1
}


RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
