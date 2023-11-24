const express = require('express')
const hbs = require('hbs')
const route = require('./routers/main')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const fileUpload = require('express-fileupload')
const { handlebars } = require('hbs')
require('./handlebar') //this hbs user made handlebars
const app = express()
app.use(fileUpload())
app.use(
  session({
    secret: 'restorent_datails',
  }),
)
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.use('', route)
//static folder
app.use('/static', express.static('public'))
//template engine
app.set('view engine', 'hbs')
app.set('views', 'views')
//app.set("views","")
hbs.registerPartials('views/partials')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://quytranquil:10102003@bk-food.nfdpanm.mongodb.net/?retryWrites=true&w=majority`,
    )

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

connectDB()

app.listen(5656, () => {
  console.log('server is start..')
})
