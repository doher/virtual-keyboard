const keyCodes = [
  {
    id: 'Backquote',
    en: {
      value: '`',
      shift: '~',
    },
    ru: {
      value: 'ё',
    },
  },
  {
    id: 'Digit1',
    value: '1',
    en: {
      shift: '!',
    },
  },
  {
    id: 'Digit2',
    value: '2',
    en: {
      shift: '@',
    },
    ru: {
      shift: '"',
    },
  },
  {
    id: 'Digit3',
    value: '3',
    en: {
      shift: '#',
    },
    ru: {
      shift: '№',
    },
  },
  {
    id: 'Digit4',
    value: '4',
    en: {
      shift: '$',
    },
    ru: {
      shift: ';',
    },
  },
  {
    id: 'Digit5',
    value: '5',
    en: {
      shift: '%',
    },
  },
  {
    id: 'Digit6',
    value: '6',
    en: {
      shift: '^',
    },
    ru: {
      shift: ':',
    },
  },
  {
    id: 'Digit7',
    value: '7',
    en: {
      shift: '&',
    },
    ru: {
      shift: '?',
    },
  },
  {
    id: 'Digit8',
    value: '8',
    en: {
      shift: '*',
    },
  },
  {
    id: 'Digit9',
    value: '9',
    en: {
      shift: '(',
    },
  },
  {
    id: 'Digit0',
    value: '0',
    en: {
      shift: ')',
    },
  },
  {
    id: 'Minus',
    value: '-',
    en: {
      shift: '_',
    },
  },
  {
    id: 'Equal',
    value: '=',
    en: {
      shift: '+',
    },
  },
  {
    id: 'Backspace',
    value: 'backspace',
    spec: true,
  },
  {
    id: 'Tab',
    value: 'tab',
    spec: true,
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
      shift: '{',
    },
    ru: {
      value: 'х',
    },
  },
  {
    id: 'BracketRight',
    en: {
      value: ']',
      shift: '}',
    },
    ru: {
      value: 'ъ',
    },
  },
  {
    id: 'Delete',
    value: 'del',
    spec: true,
  },
  {
    id: 'CapsLock',
    value: 'caps lock',
    spec: true,
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
      shift: ':',
    },
    ru: {
      value: 'д',
    },
  },
  {
    id: 'Quote',
    en: {
      value: '\'',
      shift: '"',
    },
    ru: {
      value: 'э',
    },
  },
  {
    id: 'Enter',
    value: 'enter',
    spec: true,
  },
  {
    id: 'ShiftLeft',
    value: 'shift',
    spec: true,
  },
  {
    id: 'Backslash',
    value: '\\',
    en: {
      shift: '|',
    },
    ru: {
      shift: '/',
    },
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
      shift: '<',
    },
    ru: {
      value: 'б',
    },
  },
  {
    id: 'Period',
    en: {
      value: '.',
      shift: '>',
    },
    ru: {
      value: 'ю',
    },
  },
  {
    id: 'Slash',
    en: {
      value: '/',
      shift: '?',
    },
    ru: {
      value: '.',
      shift: ',',
    },
  },
  {
    id: 'ArrowUp',
    value: '&#8593;',
    spec: true,
  },
  {
    id: 'ShiftRight',
    value: 'shift',
    spec: true,
  },
  {
    id: 'ControlLeft',
    value: 'ctrl',
    spec: true,
  },
  {
    id: 'AltLeft',
    value: 'alt',
    spec: true,
  },
  {
    id: 'Space',
    value: ' ',
    spec: true,
  },
  {
    id: 'AltRight',
    value: 'alt',
    spec: true,
  },
  {
    id: 'ControlRight',
    value: 'ctrl',
    spec: true,
  },
  {
    id: 'ArrowLeft',
    value: '&#8592;',
    spec: true,
  },
  {
    id: 'ArrowDown',
    value: '&#8595;',
    spec: true,
  },
  {
    id: 'ArrowRight',
    value: '&#8594;',
    spec: true,
  },
];

export { keyCodes as default };
