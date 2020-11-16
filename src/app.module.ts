import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './videos/video.module';

@Module({
  imports: [
    VideoModule, 
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
