import Keyboard from './js/Keyboard';
import Layout from './js/Layout';
import './styles/base.scss';

const layout = new Layout();
const keyboard = new Keyboard();
const textarea = document.createElement('textarea');

keyboard.createButton();
textarea.classList.add('textarea');

function putChar(char) {
  switch (char) {
    case 'ctrl':
    case 'alt':
    case 'backspace':
    case 'del':
    case 'tab':
      textarea.value += '';
      break;

    case 'caps lock':
      keyboard.pressCapsLock();
      layout.refresh('#keyboard', keyboard.init());
      break;

    case 'enter':
      textarea.value += '\n';
      break;

    case 'shift':
      keyboard.pressShift();
      layout.refresh('#keyboard', keyboard.init());
      break;

    default:
      textarea.value += char;
      break;
  }
}

function changeActiveState(event) {
  event.preventDefault();

  const { code } = event;
  const eventType = event.type;
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((btn) => {
    const char = btn.querySelector('span').textContent;

    if (btn.classList.contains(code)) {
      if (eventType === 'keydown' && !btn.classList.contains('active')) {
        btn.classList.add('active');
        putChar(char);
      } else if (eventType === 'keyup') {
        btn.classList.remove('active');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(layout.init());
  layout.addSection(textarea);
  layout.addSection(keyboard.init());
});
document.addEventListener('keydown', (event) => {
  changeActiveState(event);
});
document.addEventListener('keyup', (event) => {
  changeActiveState(event);
});
