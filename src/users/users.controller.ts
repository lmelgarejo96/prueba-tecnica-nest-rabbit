import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import config from '../config';

@Controller('test')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
    private readonly amqpConnection: AmqpConnection
  ) { }

  @Get('users')
  async getTestUsers() {
    const users = await this.usersService.getUsers()
    this.amqpConnection.publish(config.RABBITMQ_EXCHANGE_NAME, config.RABBITMQ_ROUTING_KEY, this.usersService.getPairUsers(users))
    return users
  }
}