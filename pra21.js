const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
const mayoredad = []
const minoredad = []
for (const user of users) {
  if (user.years >= 18) {
    mayoredad.push(user)
  } else {
    minoredad.push(user)
  }
}
console.log('user with minor', minoredad)
console.log('users with mayor', mayoredad)
