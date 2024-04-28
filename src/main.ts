import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import * as config from 'config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Incoming request data validation
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // swagger
  const openAPIConfig = new DocumentBuilder()
    .setTitle('Palette service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, openAPIConfig);
  SwaggerModule.setup('api-docs', app, document);

  // server start
  await app.listen(config.get('server.port'));
}
bootstrap();
