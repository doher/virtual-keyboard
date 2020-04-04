import Keyboard from './js/Keyboard';
import Layout from './js/Layout';
import './styles/base.scss';

const layout = new Layout();
const keyboard = new Keyboard();
const textarea = document.createElement('textarea');

textarea.classList.add('textarea');

function pressButton(button) {
  switch (button) {
    case 'ctrl':
    case 'alt':
    case 'backspace':
    case 'del':
    case 'tab':
    case 'shift':
      textarea.value += '';
      break;

    case 'caps lock':
      keyboard.isCapsLock = !keyboard.isCapsLock;
      keyboard.buttons = { caps: keyboard.isCapsLock };
      break;

    case 'enter':
      textarea.value += '\n';
      break;

    default:
      textarea.value += button;
      break;
  }
}

function changeActiveState(event) {
  event.preventDefault();

  const { code, repeat } = event;
  const eventType = event.type;
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((btn) => {
    const content = btn.querySelector('span').textContent;

    if (btn.classList.contains(code)) {
      switch (eventType) {
        case 'keydown':
          if (!(repeat && btn.classList.contains('CapsLock'))) {
            pressButton(content);
            console.log('repeat');
          }

          if (!btn.classList.contains('active')) {
            btn.classList.add('active');
          }
          break;

        case 'keyup':
          if (!(keyboard.isCapsLock && btn.classList.contains('CapsLock'))) {
            btn.classList.remove('active');
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
  changeActiveState(event);
});
document.addEventListener('keyup', (event) => {
  changeActiveState(event);
});
