import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { HttpModule } from '@nestjs/axios';
import { RabbitMQModule, AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import config from "./config"

@Module({
  imports: [
    HttpModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: config.RABBITMQ_EXCHANGE_NAME,
          type: config.RABBITMQ_EXCHANGE_TYPE,
          options: {
            durable: config.RABBITMQ_EXCHANGE_DURABLE,
          }
        },
      ],
      uri: config.RABBITMQ_URI,
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],

})
export class AppModule {
  constructor(
    private readonly amqpConnection: AmqpConnection,
  ) { }

  async onApplicationBootstrap(): Promise<void> {
    await this.amqpConnection.channel.assertQueue(config.RABBITMQ_QUEUE_NAME, { durable: config.RABBITMQ_QUEUE_DURABLE });
    await this.amqpConnection.channel.bindQueue(config.RABBITMQ_QUEUE_NAME, config.RABBITMQ_EXCHANGE_NAME, config.RABBITMQ_ROUTING_KEY);
  }
}
