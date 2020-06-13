var json = require('./data.json')

console.log('Title: ' + json.title)
console.log('People:\n  -')
for (var i = 0; i < json.people.length; i++) {
   console.log(' Name: ' + json.people[i].name)
   console.log(' Age: ' + json.people[i].age)
   console.log(' -')
}