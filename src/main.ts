import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // const fs = require('fs');
  // const httpsOptions = {
  //   key: fs.readFileSync('./secrets/create-cert-key.pem'),
  //   cert: fs.readFileSync('./secrets/create-cert.pem'),
  // };

  
  const app = await NestFactory.create(AppModule,);
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  const config = new DocumentBuilder()
    .setTitle('API Projeto Integrador ')
    .setDescription(
      'A presente API tem como objetivo simular cadastros possiveis para a API do Projeto Integrador ',
    )
    .setVersion('1.0')
    .addTag('usuario')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  useContainer(app.select(AppModule),{fallbackOnErrors:true})
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
