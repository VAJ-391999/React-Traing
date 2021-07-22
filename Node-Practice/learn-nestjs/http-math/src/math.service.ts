import { Injectable } from "@nestjs/common";
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";


@Injectable()
export class MathService {

    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
              host: '127.0.0.1',
              port: 8877,
            }
        })
    }

    public accumulate(data: number[]) {
        return this.client.send<number, number[]>('add', data)
    }
}

/*import { Logger } from "@nestjs/common";
import { ClientOptions, ClientProxyFactory, Transport } from "@nestjs/microservices";

const logger = new Logger('Main');

const microserviceOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8877,
  }

}

const client = ClientProxyFactory.create(microserviceOptions);
client
  .send<number, number[]>('add', [2,3,4,5])
  .subscribe(result => logger.log(result))*/