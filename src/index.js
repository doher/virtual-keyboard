import Keyboard from './js/Keyboard';
import Layout from './js/Layout';
import './styles/base.scss';

const layout = new Layout();
const keyboard = new Keyboard();
const textarea = document.createElement('textarea');

keyboard.createButton();
textarea.classList.add('textarea');

function changeActiveState(event) {
  const { code } = event;
  const eventType = event.type;
  const element = event.target;

  console.log(element);

  document.querySelectorAll('.button').forEach((btn) => {
    if (btn.classList.contains(code)) {
      if (eventType === 'keydown' && !btn.classList.contains('active')) {
        btn.classList.add('active');
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
  event.preventDefault();
  changeActiveState(event);
});
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  changeActiveState(event);
});
