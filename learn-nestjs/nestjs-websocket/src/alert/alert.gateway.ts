import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/alert'})
export class AlertGateway {

  @WebSocketServer()
  wss: Server

  
 sendToAll(msg: string) {
   this.wss.emit('Alert to Client', { type: 'Alert', message: msg})
 }
}
