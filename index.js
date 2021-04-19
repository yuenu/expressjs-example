const express = require('express')
const app = express()
const port = 3000

app.set('view engin', 'ejs')

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/cats', (req, res) => {
  res.send('MEOW')
})

app.get('/dogs/:name', (req, res) => {
  const { name } = req.params
  res.send(`WOOF, The dog name is: ${name}`)
})

app.get('*', (req, res) => {
  res.send('<h1>ERROR PATH~~~~~~~~~</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})