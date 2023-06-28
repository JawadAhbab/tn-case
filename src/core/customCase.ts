import wordSeparator from './scripts/wordSeparator'

export default function (string: string, separator: string = '/') {
  const words = wordSeparator(string)
  return words.join(separator)
}
