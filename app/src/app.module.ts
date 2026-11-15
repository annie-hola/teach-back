import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule, NotesModule],
})
export class AppModule {}
