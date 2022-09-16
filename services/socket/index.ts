import { io, Socket } from "socket.io-client";
import { HumanGameModule } from "@/store/modules";

interface IjoinGameParams {
  userId: string;
  gameId: string;
}

interface IMessage {
  from: string;
  content: string;
}

export default class SocketIO {
  socket: Socket;

  constructor() {
    this.socket = io("ws://localhost:5000", { autoConnect: false });
    this.socket.on("message", (message) => {
      HumanGameModule.addMessage(message);
      console.log(message);
    });
  }

  sendMessage(message: IMessage): void {
    HumanGameModule.addMessage(message);
    this.socket.emit("message", message);
  }

  joinGame(params: IjoinGameParams): void {
    this.socket.connect();
    this.socket.emit("joinGame", params);
  }

  leaveGame(params: IjoinGameParams): void {
    this.socket.emit("leaveGame", params);
    this.socket.disconnect();
  }
}
