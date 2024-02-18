const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const filmshort = []
const filmmediana = []
const filmlong = []
for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    filmshort.push(movie)
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    filmmediana.push(movie)
  } else {
    filmlong.push(movie)
  }
}
console.log('shortfilm', filmshort)
console.log('medium film are', filmmediana)
console.log('long film are', filmlong)
