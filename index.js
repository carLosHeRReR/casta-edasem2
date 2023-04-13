const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.get('/about', (req, res) => {
    res.sendFile('./static/about.html',{
        root: __dirname
    })
})

app.get('/contact', (req, res) => {
    res.sendFile('./static/contact.html',{
        root: __dirname
    })
})

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina...!!! de seguro te equivocaste busca en otro lado :D')
})

app.listen('3005')
console.log('Server on port ${3005}')

