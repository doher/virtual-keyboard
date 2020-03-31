import render from './js/keyboard';
import './styles/base.scss';

const wrapper = document.createElement('div');
const keyboard = document.createElement('div');
const textarea = document.createElement('textarea');

function isActive(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

function addActiveState(event) {
  const buttons = document.querySelectorAll('.button');
  const { code } = event;

  buttons.forEach((btn) => {
    if (btn.classList.contains(code) && !btn.classList.contains('active')) {
      btn.classList.add('active');

      textarea.value += btn.querySelector('span').textContent;
    }
  });
}

function removeActiveState(event) {
  const buttons = document.querySelectorAll('.button');
  const { code } = event;

  buttons.forEach((btn) => {
    if (btn.classList.contains(code)) {
      btn.classList.remove('active');
    }
  });
}

function changeActiveState(event) {
  const element = event.target;

  if (element.tagName === 'SPAN') {
    const parent = element.parentElement;

    isActive(parent);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  textarea.classList.add('textarea');
  wrapper.classList.add('wrapper');
  keyboard.classList.add('keyboard');

  wrapper.append(textarea);
  wrapper.append(keyboard);
  document.body.append(wrapper);

  render('.keyboard');
});
document.addEventListener('mousedown', (event) => (changeActiveState(event)));
document.addEventListener('mouseup', (event) => (changeActiveState(event)));
document.addEventListener('keydown', (event) => {
  addActiveState(event);
});
document.addEventListener('keyup', (event) => (removeActiveState(event)));
