const express = require('express')
const Data = require('./projects-model')

const router = express.Router()

router.get('/', (req, res) => {
  Data.find()
    .then((projects) => {
      res.status(200).json(projects)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Error retrieving projects' })
    })
})

router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((project) => {
      project
        ? res.status(200).json(project)
        : res.status(404).json({ message: 'Project not found' })
    })
    .catch((error) => {
      console.log(error)
      res
        .status(500)
        .json({ message: 'Error retrieving the specified project' })
    })
})

router.post('/', (req, res) => {
  Data.add(req.body)
    .then((project) => {
      res.status(201).json(project)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Error adding the project' })
    })
})

router.put('/:id', (req, res) => {
  Data.update(req.params.id, req.body)
    .then((project) => {
      project
        ? res.status(200).json(project)
        : res.status(404).json({
            message: 'The project with the specified id could not be found',
          })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Error updating the project' })
    })
})

router.delete('/:id', (req, res) => {
  Data.remove(req.params.id)
    .then((count) => {
      count > 0
        ? res.status(200).json({ message: 'This project has been removed' })
        : res.status(404).json({ message: 'This project could not be found' })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        message: 'Error removing the project',
      })
    })
})

module.exports = router
