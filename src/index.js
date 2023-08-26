const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
var morgan = require('morgan');
const app = express();
const port = 3000;

// static config
app.use(express.static(path.join(__dirname, 'public')))
// htpp logger
app.use(morgan('combined'))
// handle bar
app.engine('hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/new', (req, res) => {
    res.render('news')
})

console.log('name: ' + __dirname)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})