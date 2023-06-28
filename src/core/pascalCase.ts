import wordSeparator from './scripts/wordSeparator'

import { capitalize } from 'tn-capitalize'

export default function (string: string) {
  const words = wordSeparator(string)
  return words.map((w) => capitalize(w)).join('')
}
