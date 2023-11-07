import { NestFactory } from '@nestjs/core';
import { BackendModule } from './app/backend.module';

const app = NestFactory.create(BackendModule, {
});
