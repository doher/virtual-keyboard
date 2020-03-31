const keyCodes = [
  {
    id: 'Backquote',
    en: {
      value: '`',
      leftShift: '~',
    },
    ru: {
      value: 'ё',
    },
  },
  {
    id: 'Digit1',
    value: '1',
    en: {
      leftShift: '!',
    },
  },
  {
    id: 'Digit2',
    value: '2',
    en: {
      leftShift: '@',
    },
    ru: {
      leftShift: '"',
    },
  },
  {
    id: 'Digit3',
    value: '3',
    en: {
      leftShift: '#',
    },
    ru: {
      leftShift: '№',
    },
  },
  {
    id: 'Digit4',
    value: '4',
    en: {
      leftShift: '$',
    },
    ru: {
      leftShift: ';',
    },
  },
  {
    id: 'Digit5',
    value: '5',
    en: {
      leftShift: '%',
    },
  },
  {
    id: 'Digit6',
    value: '6',
    en: {
      leftShift: '^',
    },
    ru: {
      leftShift: ':',
    },
  },
  {
    id: 'Digit7',
    value: '7',
    en: {
      leftShift: '&',
    },
    ru: {
      leftShift: '?',
    },
  },
  {
    id: 'Digit8',
    value: '8',
    en: {
      leftShift: '*',
    },
  },
  {
    id: 'Digit9',
    value: '9',
    en: {
      leftShift: '(',
    },
  },
  {
    id: 'Digit0',
    value: '0',
    en: {
      leftShift: ')',
    },
  },
  {
    id: 'Minus',
    value: '-',
    en: {
      leftShift: '_',
    },
  },
  {
    id: 'Equal',
    value: '=',
    en: {
      leftShift: '+',
    },
  },
  {
    id: 'Backspace',
    value: 'backspace',
  },
  {
    id: 'Tab',
    value: 'tab',
  },
  {
    id: 'KeyQ',
    en: {
      value: 'q',
    },
    ru: {
      value: 'й',
    },
  },
  {
    id: 'KeyW',
    en: {
      value: 'w',
    },
    ru: {
      value: 'ц',
    },
  },
  {
    id: 'KeyE',
    en: {
      value: 'e',
    },
    ru: {
      value: 'у',
    },
  },
  {
    id: 'KeyR',
    en: {
      value: 'r',
    },
    ru: {
      value: 'к',
    },
  },
  {
    id: 'KeyT',
    en: {
      value: 't',
    },
    ru: {
      value: 'е',
    },
  },
  {
    id: 'KeyY',
    en: {
      value: 'y',
    },
    ru: {
      value: 'н',
    },
  },
  {
    id: 'KeyU',
    en: {
      value: 'u',
    },
    ru: {
      value: 'г',
    },
  },
  {
    id: 'KeyI',
    en: {
      value: 'i',
    },
    ru: {
      value: 'ш',
    },
  },
  {
    id: 'KeyO',
    en: {
      value: 'o',
    },
    ru: {
      value: 'щ',
    },
  },
  {
    id: 'KeyP',
    en: {
      value: 'p',
    },
    ru: {
      value: 'з',
    },
  },
  {
    id: 'BracketLeft',
    en: {
      value: '[',
      leftShift: '{',
    },
    ru: {
      value: 'х',
    },
  },
  {
    id: 'BracketRight',
    en: {
      value: ']',
      leftShift: '}',
    },
    ru: {
      value: 'ъ',
    },
  },
  {
    id: 'Delete',
    value: 'del',
  },
  {
    id: 'CapsLock',
    value: 'caps lock',
  },
  {
    id: 'KeyA',
    en: {
      value: 'a',
    },
    ru: {
      value: 'ф',
    },
  },
  {
    id: 'KeyS',
    en: {
      value: 's',
    },
    ru: {
      value: 'ы',
    },
  },
  {
    id: 'KeyD',
    en: {
      value: 'd',
    },
    ru: {
      value: 'в',
    },
  },
  {
    id: 'KeyF',
    en: {
      value: 'f',
    },
    ru: {
      value: 'а',
    },
  },
  {
    id: 'KeyG',
    en: {
      value: 'g',
    },
    ru: {
      value: 'п',
    },
  },
  {
    id: 'KeyH',
    en: {
      value: 'h',
    },
    ru: {
      value: 'р',
    },
  },
  {
    id: 'KeyJ',
    en: {
      value: 'j',
    },
    ru: {
      value: 'о',
    },
  },
  {
    id: 'KeyK',
    en: {
      value: 'k',
    },
    ru: {
      value: 'л',
    },
  },
  {
    id: 'KeyL',
    en: {
      value: 'l',
    },
    ru: {
      value: 'д',
    },
  },
  {
    id: 'Semicolon',
    en: {
      value: ';',
      leftShift: ':',
    },
    ru: {
      value: 'д',
    },
  },
  {
    id: 'Quote',
    en: {
      value: '\'',
      leftShift: '"',
    },
    ru: {
      value: 'э',
    },
  },
  {
    id: 'Enter',
    value: 'enter',
  },
  {
    id: 'ShiftLeft',
    value: 'shift',
  },
  {
    id: 'KeyZ',
    en: {
      value: 'z',
    },
    ru: {
      value: 'я',
    },
  },
  {
    id: 'KeyX',
    en: {
      value: 'x',
    },
    ru: {
      value: 'ч',
    },
  },
  {
    id: 'KeyC',
    en: {
      value: 'c',
    },
    ru: {
      value: 'c',
    },
  },
  {
    id: 'KeyV',
    en: {
      value: 'v',
    },
    ru: {
      value: 'м',
    },
  },
  {
    id: 'KeyB',
    en: {
      value: 'b',
    },
    ru: {
      value: 'и',
    },
  },
  {
    id: 'KeyN',
    en: {
      value: 'n',
    },
    ru: {
      value: 'т',
    },
  },
  {
    id: 'KeyM',
    en: {
      value: 'm',
    },
    ru: {
      value: 'ь',
    },
  },
  {
    id: 'Comma',
    en: {
      value: ',',
      leftShift: '<',
    },
    ru: {
      value: 'б',
    },
  },
  {
    id: 'Period',
    en: {
      value: '.',
      leftShift: '>',
    },
    ru: {
      value: 'ю',
    },
  },
  {
    id: 'Slash',
    en: {
      value: '/',
      leftShift: '?',
    },
    ru: {
      value: '.',
      leftShift: ',',
    },
  },
  {
    id: 'ArrowUp',
    value: '&#8593;',
  },
  {
    id: 'ShiftRight',
    value: 'shift',
  },
  {
    id: 'ControlLeft',
    value: 'ctrl',
  },
  {
    id: 'AltLeft',
    value: 'alt',
  },
  {
    id: 'Space',
    value: ' ',
  },
  {
    id: 'AltRight',
    value: 'alt',
  },
  {
    id: 'ControlRight',
    value: 'ctrl',
  },
  {
    id: 'ArrowLeft',
    value: '&#8592;',
  },
  {
    id: 'ArrowDown',
    value: '&#8595;',
  },
  {
    id: 'ArrowRight',
    value: '&#8594;',
  },
];

export { keyCodes as default };
