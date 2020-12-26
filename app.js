require('dotenv').config()

const { createServer } = require('http')

const PORT = process.env.PORT || 8080;

const server = createServer(( request, response ) => {
 return response.end('Look! this is a response')
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} `)
})