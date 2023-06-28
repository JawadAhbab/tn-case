import kebabCase_ from './core/kebabCase'
import camelCase_ from './core/camelCase'
import dotCase_ from './core/dotCase'
import pascalCase_ from './core/pascalCase'
import snakeCase_ from './core/snakeCase'
import spaceCase_ from './core/spaceCase'
import customCase_ from './core/customCase'

export const customCase: (string: string, separator?: string) => string = customCase_
export const kebabCase: (string: string) => string = kebabCase_
export const snakeCase: (string: string) => string = snakeCase_
export const dotCase: (string: string) => string = dotCase_
export const camelCase: (string: string) => string = camelCase_
export const pascalCase: (string: string) => string = pascalCase_
export const spaceCase: (string: string) => string = spaceCase_
