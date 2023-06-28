import { capitalize } from 'tn-capitalize';

function wordSeparator(string) {
  var separator = /[A-Z-_. \\/]/;
  var seprem = /[-_. \\/]/;
  var chars = string.split('');
  var words = [''];
  chars.forEach(function (char) {
    if (char.match(separator)) {
      words.push('');
      if (char.match(seprem)) return;
    }

    var lastkey = words.length - 1;
    words[lastkey] += char.toLowerCase();
  });
  return words.filter(function (word) {
    return word.length;
  });
}

function customCase_(string) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var words = wordSeparator(string);
  return words.join(separator);
}

function kebabCase_(string) {
  return customCase_(string, '-');
}

function camelCase_(string) {
  var words = wordSeparator(string);
  var remainWords = words.splice(1);
  var firstWord = words[0] || '';
  return firstWord + remainWords.map(function (w) {
    return capitalize(w);
  }).join('');
}

function dotCase_(string) {
  return customCase_(string, '.');
}

function pascalCase_(string) {
  var words = wordSeparator(string);
  return words.map(function (w) {
    return capitalize(w);
  }).join('');
}

function snakeCase_(string) {
  return customCase_(string, '_');
}

function spaceCase_(string) {
  return customCase_(string, ' ');
}

var customCase = customCase_;
var kebabCase = kebabCase_;
var snakeCase = snakeCase_;
var dotCase = dotCase_;
var camelCase = camelCase_;
var pascalCase = pascalCase_;
var spaceCase = spaceCase_;
export { camelCase, customCase, dotCase, kebabCase, pascalCase, snakeCase, spaceCase };
