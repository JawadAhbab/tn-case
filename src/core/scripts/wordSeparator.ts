export default function (string: string) {
  const separator = /[A-Z-_. \\/]/
  const seprem = /[-_. \\/]/
  const chars = string.split('')
  const words: string[] = ['']

  chars.forEach((char) => {
    if (char.match(separator)) {
      words.push('')
      if (char.match(seprem)) return
    }

    const lastkey = words.length - 1
    words[lastkey] += char.toLowerCase()
  })

  return words.filter((word) => word.length)
}
