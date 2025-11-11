// src/auth/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateAuthorityDto } from './dto/create-authority.dto';

@Injectable()
export class UsersService
{
    // Explicitly 
    private authorityUsers: {
        id: number;
        name: string;
        password: string;
        date: string;
        socialMediaLink: string;
    }[] = [];

    
    createAuthority(dto: CreateAuthorityDto)
    {
        const newUser = {
            id: this.authorityUsers.length + 1,
            name: dto.name,
            password: dto.password,
            date: dto.date,
            socialMediaLink: dto.socialMediaLink,
        };

        this.authorityUsers.push(newUser);

        return {
            message: '✅ Authority user created successfully!',
            user: newUser,
        };
    }

    // get all authority users
    getAllAuthorities()
    {
        return this.authorityUsers;
    }


    findById(id: number)
    {
        return this.authorityUsers.find(u => u.id === id);
    }
}
