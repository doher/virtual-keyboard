import keyCodes from './keyData';

const toHTML = (code) => (`
  <div class="${code.id} button">
    <span>${code.value || code.en.value}</span>
  </div>
`);

function render(selector) {
  const html = keyCodes.map(toHTML).join('');

  document.querySelector(selector).innerHTML = html;
}

export { render as default };
