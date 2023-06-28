<p align="center"><i>Bundle Size - 391 bytes gzipped</i></p>

## Usage

```ts
import { kebabCase, snakeCase, dotCase, camelCase, pascalCase, spaceCase, customCase } from 'tn-case'
const string = 'lorem ipsum'

kebabCase(string) // lorem-ipsum
snakeCase(string) // lorem_ipsum
dotCase(string) // lorem.ipsum
camelCase(string) // loremIpsum
pascalCase(string) // LoremIpsum
spaceCase(string) // lorem ipsum
customCase(string, '+') // lorem+ipsum
```
