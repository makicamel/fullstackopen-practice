const mongoose = require('mongoose')
const url = `mongodb+srv://makicamel:<password>@cluster0.rs7hh.mongodb.net/noteApp?retryWrites=true&w=majority`
mongoose.connect(url)
console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})
noteSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = mongoose.model('Note', noteSchema)
