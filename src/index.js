import render from './js/keyboard';
import './styles/base.scss';

function toggleActiveButton(event) {
  const element = event.target;
  const { parentElement } = element;

  if ([...element.classList].includes('button')
    || (parentElement && [...parentElement.classList].includes('button'))) {
    element.classList.toggle('active');
    parentElement.classList.toggle('active');
  }
}

window.onload = () => {
  const wrapper = document.createElement('div');
  const keyboard = document.createElement('div');

  wrapper.classList.add('wrapper');
  keyboard.classList.add('keyboard');

  wrapper.append(keyboard);
  document.body.append(wrapper);

  render('.keyboard');

  document.addEventListener('mouseup', (event) => (toggleActiveButton(event)));
  document.addEventListener('mousedown', (event) => (toggleActiveButton(event)));
  document.addEventListener('keydown', (event) => {
    console.log(event.code);
  });
};
