import { Controller, Post, Body, Patch, Param, Get, Query } from '@nestjs/common';
import { AuthorityService } from './authority.service';

@Controller('authority')
export class AuthorityController
{
    constructor(private service: AuthorityService) { }

@Post('create')
createUser(@Body() body) {
    return this.service.createAuthority(body);
}

    // 2. UPDATE COUNTRY
    @Patch('update/:id/:country')
    updateCountry(
        @Param('id') id: number,
        @Param('country') country: string,
    )
    {
        return this.service.updateCountry(id, country);
    }

    // 3. GET BY JOINING DATE
    @Get('date/:date')
    getByDate(@Param('date') date: string)
    {
        return this.service.findByJoiningDate(date);
    }

    // 4. GET USERS WITH DEFAULT COUNTRY
    @Get('unknown')
    getUnknown()
    {
        return this.service.findUnknownCountry();
    }
    

}
