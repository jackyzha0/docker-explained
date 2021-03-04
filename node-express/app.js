const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// serve static files in 'public'
app.use(express.static('public'))

// default hello world on /
app.get('/', (req, res) => res.send('Hello World!'))

// serve static stuff on /doggo
app.get('/doggo', (req, res) => res.sendFile(__dirname + '/main.html'))

// start server
app.listen(port, () => { console.log(`Example running on localhost:${port}`) })
