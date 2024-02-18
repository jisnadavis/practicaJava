const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(word) {
  let thelongestword = word[0]
  for (let i = 0; i < word.length; i++) {
    let element = word[i]
    if (thelongestword.length < element.length) {
      thelongestword = element
    }
  }
  return thelongestword
}
console.log(findLongestWord(avengers))
