import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios"
import { lastValueFrom } from 'rxjs';
import { User } from 'src/models/User';
import { UserService } from 'src/models/UserService';
import config from '../config';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) { }

  mapToUser(user: UserService): User {
    return {
      id: user.id,
      company: user.company,
      email: user.email,
      name: user.name,
      phone: user.phone,
      username: user.username,
      website: user.website
    }
  }

  filterPair(user: UserService): boolean {
    return user.id % 2 == 0
  }

  sortById(leftUser: UserService, rightUser: UserService): number {
    return rightUser.id - leftUser.id
  }

  async getUsers(): Promise<User[]> {
    const serviceURL = config.API_USERS_URI
    const { data } = await lastValueFrom(this.httpService.get<User[]>(serviceURL));
    const users = data.map(this.mapToUser).sort(this.sortById);
    return users
  }

  getPairUsers(users: User[]): User[] {
    return users.filter(this.filterPair)
  }
}
