const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({ api: 'We Up' })
})

module.exports = server
