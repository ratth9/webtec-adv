import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authority } from './authority.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthorityService
{
    constructor(
        @InjectRepository(Authority)
        private authorityRepo: Repository<Authority>,
    ) { }

    // CREATE USER
    async createAuthority(body: any)
    {
        const authority = this.authorityRepo.create({
            uniqueId: uuidv4(),
        });
        return this.authorityRepo.save(authority);
    }



    // UPDATE COUNTRY
    async updateCountry(id: number, country: string)
    {
        await this.authorityRepo.update(id, { country });
        return this.authorityRepo.findOne({ where: { id } });
    }

    // FIND BY DATE
    findByJoiningDate(date: Date | string)
    {
        const joiningDate = typeof date === 'string' ? new Date(date) : date;
        return this.authorityRepo.find({
            where: { joiningDate }
        });
    }

    // FIND USERS WITH DEFAULT COUNTRY
    findUnknownCountry()
    {
        return this.authorityRepo.find({
            where: { country: 'Unknown' }
        });
    }
}
