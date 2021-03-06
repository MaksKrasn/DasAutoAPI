require('dotenv').config()
const config = require('./config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const hbs = require('hbs')
const expressHbs = require('express-handlebars')
const homeRouter = require('./routes/home.routes')
const apiRouter = require('./routes/api.router')

app.set('view engine', 'hbs')

mongoose.set('useFindAndModify', false);

//регистрации layout`s
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.use(express.static(__dirname + '/public'))
//регистрации пути к частичным представлениям
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', homeRouter)
app.use('/api', apiRouter)

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log('Success conect to DB');
})

app.listen(process.env.PORT, () => {
    console.log('Start server');
})