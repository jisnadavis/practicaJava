const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  let arraynew = []
  param.forEach((element) => {
    if (!arraynew.includes(element)) {
      arraynew.push(element)
    }
  })
  return arraynew
}
console.log(removeDuplicates(duplicates))
