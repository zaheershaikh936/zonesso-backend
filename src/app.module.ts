import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import config from '../ormconfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ShowroomModule } from './showroom/showroom.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    CategoryModule,
    ShowroomModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
