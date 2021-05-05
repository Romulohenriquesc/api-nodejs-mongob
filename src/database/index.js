const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:4BHKVnu7tIiAWD5B@cluster0.lrla8.mongodb.net/noderest?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
mongoose.Promise = global.Promise

module.exports = mongoose