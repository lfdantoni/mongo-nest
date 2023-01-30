import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongo } from 'config';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI || mongo.uri), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
