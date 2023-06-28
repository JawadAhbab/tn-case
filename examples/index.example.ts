import { camelCase, customCase, dotCase, kebabCase, pascalCase, snakeCase, spaceCase } from '../src/index'

const string = 'lorem ipsum'

console.log('kebabCase  =>', kebabCase(string))
console.log('snakeCase  =>', snakeCase(string))
console.log('dotCase    =>', dotCase(string))
console.log('camelCase  =>', camelCase(string))
console.log('pascalCase =>', pascalCase(string))
console.log('spaceCase  =>', spaceCase(string))
console.log('customCase =>', customCase(string, '+'))
