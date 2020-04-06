import Keyboard from './js/Keyboard';
import Layout from './js/Layout';
import './styles/base.scss';

const layout = new Layout();
const keyboard = new Keyboard();
const textarea = document.createElement('textarea');
const pressed = new Set();

textarea.classList.add('textarea');
keyboard.language = localStorage.getItem('language') || 'en';

function typeText(button) {
  const position = textarea.selectionStart;
  const text = textarea.value.split('');

  text.splice(position, 0, button);
  textarea.value = text.join('');
  textarea.selectionStart = position + 1;
  textarea.selectionEnd = position + 1;
}

function deleteText(button) {
  const position = textarea.selectionStart;
  const text = textarea.value.split('');

  switch (button) {
    case 'backspace':
      if (position !== 0) {
        text.splice(position - 1, 1);
        textarea.value = text.join('');
        textarea.selectionStart = position - 1;
        textarea.selectionEnd = position - 1;
      }
      break;

    case 'del':
      if (position !== text.length) {
        text.splice(position, 1);
        textarea.value = text.join('');
        textarea.selectionStart = position;
        textarea.selectionEnd = position;
      }
      break;

    default:
      break;
  }
}

function pressButton(button) {
  textarea.focus();

  switch (button) {
    case 'ctrl':
    case 'alt':
      break;

    case 'backspace':
    case 'del':
      deleteText(button);
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

    case 'tab':
      typeText('\t');
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

function toggleActiveStateByKey(event) {
  event.preventDefault();

  const { code, type, repeat } = event;
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((btn) => {
    const content = btn.querySelector('span').textContent;
    const isCapsLock = btn.classList.contains('CapsLock');

    if (btn.classList.contains(code)) {
      switch (type) {
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

function toggleActiveStateByMouse(event) {
  const { type, target } = event;

  if (target.tagName === 'SPAN') {
    const { parentElement, textContent } = target;
    const isShift = parentElement.classList.contains('ShiftLeft')
      || parentElement.classList.contains('ShiftRight');
    const isAlt = parentElement.classList.contains('AltLeft')
      || parentElement.classList.contains('AltRight');
    const shiftLeftElement = document.querySelector('.ShiftLeft');
    const shiftRightElement = document.querySelector('.ShiftRight');
    const altLeftElement = document.querySelector('.AltLeft');
    const altRightElement = document.querySelector('.AltRight');

    switch (type) {
      case 'mousedown':
        pressButton(textContent);

        if (isShift) {
          keyboard.isShift = !keyboard.isShift;
          shiftLeftElement.classList.add('active');
          shiftRightElement.classList.add('active');
        } else if (isAlt) {
          altLeftElement.classList.toggle('active');
          altRightElement.classList.toggle('active');
        } else {
          parentElement.classList.add('active');
        }
        break;

      case 'mouseup': {
        if (!((keyboard.isCapsLock && parentElement.classList.contains('CapsLock'))
          || (isShift && keyboard.isShift) || isAlt)) {
          parentElement.classList.remove('active');
        }

        if (isShift) {
          if (keyboard.isShift) {
            keyboard.buttons = { caps: !keyboard.isCapsLock, shift: keyboard.isShift };
          } else {
            keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
          }
        }

        if (shiftLeftElement.classList.contains('active') || shiftRightElement.classList.contains('active')) {
          if (!isShift) {
            shiftLeftElement.classList.remove('active');
            shiftRightElement.classList.remove('active');
            keyboard.isShift = !keyboard.isShift;
            keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
          }

          if (parentElement.classList.contains('AltLeft') || parentElement.classList.contains('AltRight')) {
            keyboard.changeLanguage();
            keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
            altLeftElement.classList.remove('active');
            altRightElement.classList.remove('active');
          }
        }

        if (altLeftElement.classList.contains('active') || altRightElement.classList.contains('active')) {
          if (!isAlt) {
            altLeftElement.classList.remove('active');
            altRightElement.classList.remove('active');
          }

          if (parentElement.classList.contains('ShiftLeft') || parentElement.classList.contains('ShiftRight')) {
            keyboard.changeLanguage();
            shiftLeftElement.classList.remove('active');
            shiftRightElement.classList.remove('active');
            keyboard.isShift = !keyboard.isShift;
            keyboard.buttons = { caps: keyboard.isCapsLock, shift: keyboard.isShift };
          }
        }

        break;
      }

      case 'mouseout':
        if (!((keyboard.isCapsLock && parentElement.classList.contains('CapsLock'))
          || (isShift && keyboard.isShift) || isAlt)) {
          parentElement.classList.remove('active');
        }
        break;

      default:
        break;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(layout.render());
  layout.addSection(textarea);
  layout.addSection(keyboard.render());
});
document.addEventListener('keydown', (event) => {
  toggleActiveStateByKey(event);
  changeLanguage(event, 'ShiftLeft', 'AltLeft');
});
document.addEventListener('keyup', (event) => {
  toggleActiveStateByKey(event);
  pressed.delete(event.code);
});
document.addEventListener('mousedown', (event) => {
  toggleActiveStateByMouse(event);
});
document.addEventListener('mouseup', (event) => {
  toggleActiveStateByMouse(event);
});
document.addEventListener('mouseout', (event) => {
  toggleActiveStateByMouse(event);
});
