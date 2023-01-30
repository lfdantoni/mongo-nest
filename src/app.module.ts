import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongo } from 'config';
import { DataEventModule } from './data-event/data-event.module';
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI || mongo.uri), DataEventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
