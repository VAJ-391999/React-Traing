import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({namespace: '/chat'})
export class ChatGateway implements OnGatewayInit/*, OnGatewayConnection, OnGatewayDisconnect*/ {

  @WebSocketServer()
  wss: Server

  private logger : Logger = new Logger('ChatGateway');

  afterInit(server: Server){
    this.logger.log('Initioalized')
  }

  /*handleConnection(client: Socket, ...agrs: any[]){
    this.logger.log(`Client is conncted... ${client.id}`)
  }

  handleDisconnect(client: Socket){
    this.logger.log(`Client is Disconnected... ${client.id}`)
  }*/
  

  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: {sender: string, room: string, message: string}): void {
    this.wss.to(message.room).emit('chatToClient', message)
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room)
    client.emit('joinedRoom', room)
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client: Socket, room: string) {
    client.leave(room)
    client.emit('leftRoom', room)
  }
}
