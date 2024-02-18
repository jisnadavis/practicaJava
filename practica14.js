const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let counts = {}
  for (let i = 0; i < param.length; i++) {
    element = param[i]
    if (counts[element] <= 1) {
      counts[element]++
    } else {
      counts[element] = 1
    }
  }
  return counts
}

console.log(repeatCounter(counterWords))
