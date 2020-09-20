const config = require('./config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const hbs = require('hbs')
const expressHbs = require('express-handlebars')
const homeRouter = require('./routes/home.routes')

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

//app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', homeRouter)
/*app.post('/create', function(req, resp) {
    console.log(req)
})*/


mongoose.connect(config.dbUri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log('Success conect to DB');
})

app.listen(config.port, config.host, () => {
    console.log('Start server');
})