import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Ativa a validação global dos DTOs
  app.useGlobalPipes(new ValidationPipe());

  // 2. Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Cinema API')
    .setDescription('Documentação da API do Sistema de Cinema com NestJS e Prisma')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // A documentação ficará na rota /api

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api`);
}
bootstrap();