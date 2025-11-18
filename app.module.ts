import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorityModule } from './authority/authority.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
     username: 'postgres',   
      password: 'postsqlrahat', 
      database: 'authdb',      
      autoLoadEntities: true,
      synchronize: true,      
    }),

    AuthorityModule,
  ],
})
export class AppModule { }
