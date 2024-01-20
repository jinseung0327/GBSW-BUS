import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SignModule } from './sign/sign.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserService } from './user/user.service';
import { PostModule } from './post/post.module';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { BusModule } from './bus/bus.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb/nest-base'),
    SignModule,
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'JWTSecretKey',
      signOptions: {
        expiresIn: '1h',
      },
    }),
    PostModule,
    UploadModule,
    ConfigModule.forRoot({ isGlobal: true }),
    BusModule,
  ],
  controllers: [],
  providers: [UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
