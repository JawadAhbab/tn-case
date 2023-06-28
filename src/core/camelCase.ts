import { capitalize } from 'tn-capitalize'
import wordSeparator from './scripts/wordSeparator'

export default function (string: string) {
  const words = wordSeparator(string)
  const remainWords = words.splice(1)
  const firstWord = words[0] || ''

  return firstWord + remainWords.map((w) => capitalize(w)).join('')
}
