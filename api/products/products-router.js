const express = require('express')
const Data = require('./products-model')

const router = express.Router()

router.get('/', (req, res) => {
  Data.find()
    .then((products) => {
      res.status(200).json(products)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving products' })
    })
})

router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((product) => {
      product
        ? res.status(200).json(product)
        : res.status(404).json({ message: 'Product not found' })
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Error retrieving the specified product' })
    })
})

router.post('/', (req, res) => {
  Data.add(req.body)
    .then((product) => {
      res.status(201).json(product)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error adding the product' })
    })
})

router.put('/:id', (req, res) => {
  Data.update(req.params.id, req.body)
    .then((product) => {
      product
        ? res.status(200).json(product)
        : res.status(404).json({
            message: 'The product with the specified id could not be found',
          })
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating the product' })
    })
})

router.delete('/:id', (req, res) => {
  Data.remove(req.params.id)
    .then((count) => {
      count > 0
        ? res.status(200).json({ message: 'This product has been removed' })
        : res.status(404).json({ message: 'This product could not be found' })
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Error removing the product',
      })
    })
})

module.exports = router
