const {server} = require("./server")

const port = 3000;

server.listen(port, () => {
  console.log(`Lyft splitting app listening at http://localhost:${port}`)
})