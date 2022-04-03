const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})
app.get('/api/notes', (request, response) => {
  const notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    }
  ]
  response.json(notes)
})

const PORT = 3004
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
