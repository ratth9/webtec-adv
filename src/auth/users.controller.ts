import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateAuthorityDto } from './dto/create-authority.dto';

@Controller('authority')
export class UsersController
{
    constructor(private readonly usersService: UsersService) { }

    // POST: http://localhost:3000/authority/create
    @Post('create')
    createAuthority(@Body() dto: CreateAuthorityDto)
    {
        return this.usersService.createAuthority(dto);
    }

    // GET: http://localhost:3000/authority
    @Get()
    getAuthorities()
    {
        return this.usersService.getAllAuthorities();
    }
    
}
