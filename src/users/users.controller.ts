import { Controller, Get, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.entity'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  get(@Param('id') id: string): Promise<User> {
    return this.usersService.get(id)
  }
}
