const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/techi'
const express = require('express')
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const description = db.collection('description')
  const image = db.collection('image')
  const name = db.collection('name')

  app.use(express.static('./public'))

  app.get('/description', (req, res) => {
    description
      .find({})
      .toArray()
      .then(response => res.send(response))
      .catch(err => console.error(err))
  })

  app.get('/image', (req, res) => {
    image
      .find({})
      .toArray()
      .then(response => res.send(response))
      .catch(err => console.error(err))
  })

  app.get('/name', (req, res) => {
    name
      .find({})
      .toArray()
      .then(response => res.send(response))
      .catch(err => console.error(err))
  })
  app.listen(3000, () => console.log('listening on port 3000'))
})
