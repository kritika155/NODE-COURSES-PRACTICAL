const path = require('path')
const express = require('express')
const hbs = require('hbs');
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Kritika Roy'
    })
})
app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'Weather App',
        name: 'Kritika Roy',
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Kritika Roy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'How may I help you?',
        name: 'Kritika Roy'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
app.get('*', (req, res) => {
    res.send(
        'Page Not Found!'
    )
})
app.listen(3003, () => {
    console.log('Server is up on port 3003.')
})