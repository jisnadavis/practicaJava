const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, itemtocheck) {
  if (param.includes(itemtocheck)) {
    return true + ` posicion: ${param.indexOf(itemtocheck)}`
  } else {
    return false
  }
}
console.log(finderName(nameFinder, 'Marc'))
