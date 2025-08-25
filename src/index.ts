import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("User Connected !!");
  setInterval(() => {
    socket.send("Price of SOL is " + Math.random());
  }, 1000);

    socket.on("message", (e) => {
        console.log(e.toString());
        
    })
});
