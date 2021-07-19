import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';


@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private logger: Logger = new Logger("AppGetway");

  @WebSocketServer() wss: Server

  afterInit(server: Server){
    this.logger.log("Initialized");
  }

  handleDisconnect(client: Socket){
    this.logger.log(`Client Disconected... ${client.id}`)
  }

  handleConnection(client: Socket, ...args: any[]){
    this.logger.log(`Client is Connected... ${client.id}`)
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> {
    //return this.wss.emit('msgToClient', text)
    return { event: 'msgToClient', data: text};
  }
}
