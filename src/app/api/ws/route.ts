import { NextResponse } from "next/server";

export function SOCKET(
  client: import("ws").WebSocket,
  request: import("http").IncomingMessage,
  server: import("ws").WebSocketServer
) {
  console.log("A client connected!");

  client.on("message", (message) => {
    client.send(message);
  });

  client.on("close", () => {
    console.log("A client disconnected!");
  });
}

export function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}
