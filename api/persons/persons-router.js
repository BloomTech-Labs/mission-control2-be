const express = require('express')
const Data = require('./persons-model')

const router = express.Router()

router.get('/', (req, res) => {
  Data.find()
    .then((persons) => {
      res.status(200).json(persons)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Error retrieving persons' })
    })
})

router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((person) => {
      person
        ? res.status(200).json(person)
        : res.status(404).json({ message: 'Person not found' })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Error retrieving the specified person' })
    })
})

router.post('/', (req, res) => {
  Data.add(req.body)
    .then((persons) => {
      console.log('***HELLO***', person)
      return res.status(201).json(persons)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Error adding the person' })
    })
})

module.exports = router
