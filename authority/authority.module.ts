import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authority } from './authority.entity';
import { AuthorityService } from './authority.service';
import { AuthorityController } from './authority.controller';

@Module({
  imports: [AuthorityModule, TypeOrmModule.forFeature([Authority])],
  controllers: [AuthorityController],
  providers: [AuthorityService],
})
export class AuthorityModule { }
