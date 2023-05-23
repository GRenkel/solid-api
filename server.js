const express = require('express')
const mainRouter = require('./src/routes/index');
const errorHandler = require('./src/middlewares/errorHandler');
const server = express()
const port = process.env.PORT || 3000

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api', mainRouter)
server.use(errorHandler)

server.listen(port, () => {
  console.log(`Server is listing on port: ${port}`)
})

module.exports = server