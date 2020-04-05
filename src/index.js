import Keyboard from './js/Keyboard';
import Layout from './js/Layout';
import './styles/base.scss';

const layout = new Layout();
const keyboard = new Keyboard();
const textarea = document.createElement('textarea');
const pressed = new Set();

textarea.classList.add('textarea');

function typeText(button) {
  const position = textarea.selectionStart;
  const text = textarea.value.split('');

  text.splice(position, 0, button);
  textarea.value = text.join('');
  textarea.selectionStart = position + 1;
  textarea.selectionEnd = position + 1;
}

function pressButton(button) {
  switch (button) {
    case 'ctrl':
    case 'alt':
    case 'backspace':
    case 'del':
    case 'tab':
      typeText('');
      break;

    case 'caps lock':
      keyboard.isCapsLock = !keyboard.isCapsLock;
      keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
      break;

    case 'shift':
      keyboard.buttons = { caps: !keyboard.isCapsLock, shift: !keyboard.isShift };
      break;

    case 'enter':
      typeText('\n');
      break;

    default:
      typeText(button);
      break;
  }
}

function changeLanguage(event, ...codes) {
  pressed.add(event.code);

  for (let i = 0; i < codes.length; i += 1) {
    const code = codes[i];

    if (!pressed.has(code)) {
      return;
    }
  }

  pressed.clear();
  keyboard.changeLanguage();
  keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
}

function toggleActiveState(event) {
  event.preventDefault();

  const { code, repeat } = event;
  const eventType = event.type;
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((btn) => {
    const content = btn.querySelector('span').textContent;
    const isCapsLock = btn.classList.contains('CapsLock');

    if (btn.classList.contains(code)) {
      switch (eventType) {
        case 'keydown':
          if (!(repeat && isCapsLock)) {
            pressButton(content);
          }

          if (!btn.classList.contains('active')) {
            btn.classList.add('active');
          }
          break;

        case 'keyup':
          if (!(keyboard.isCapsLock && btn.classList.contains('CapsLock'))) {
            btn.classList.remove('active');
          }

          if (code === 'ShiftLeft' || code === 'ShiftRight') {
            keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
          }
          break;

        default:
          break;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(layout.render());
  layout.addSection(textarea);
  layout.addSection(keyboard.render());
});
document.addEventListener('keydown', (event) => {
  toggleActiveState(event);
  changeLanguage(event, 'ShiftLeft', 'AltLeft');
});
document.addEventListener('keyup', (event) => {
  toggleActiveState(event);
  pressed.delete(event.code);
});
