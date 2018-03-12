const app = require("express")()
const WebSocketServer = require("websocket").server
const port = 5000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const history = []
const clients = []
let colors = ["red", "green", "blue", "orange"].sort((a, b) => { Math.random() - 0.5 })

const sanitize = (str) => {
  return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
//
//
//
// wsServer = new WebSocketServer({
//   httpServer
// })
//
// wsServer.on("request", (req) => {
//   const connection = req.accept(null, request.origin)
//   const index = clients.push(connection) - 1
//   let userName = false
//   let userColor = false
//
//   console.log((new Date()) + ' Connection accepted.');
//
//   if (history.length) {
//     connection.sendUTF(JSON.stringify({ type: history, data: history }))
//   }
//
//   connection.on("message", (message) => {
//     if (!userName) {
//       userName = sanitize(message.utf8Data)
//       userColor = colors.shift()
//       connection.sendUTF(JSON.stringify({ type: "color", data: userColor }))
//       console.log((new Date()) + ' User is known as: ' + userName + ' with ' + userColor + ' color.')
//     } else {
//       console.log((new Date()) + ' Received Message from ' + userName + ': ' + message.utf8Data)
//       const obj = {
//         time: (new Date()).getTime(),
//         text: sanitize(message.utf8Data),
//         author: userName,
//         color: userColor
//       }
//       history.push(obj);
//       history = history.slice(-100)
//       const json = JSON.stringify({ type:'message', data: obj });
//       clients.forEach((client) => client.sendUTF(json))
//     }
//   })
//
//   connection.on("close", (connection) => {
//     if (userName !== false && userColor !== false) {
//       console.log((new Date()) + " Peer " + connection.remoteAddress + " disconnected.")
//       clients.splice(index, 1)
//       colors.push(userColor)
//     }
//   })
// })
