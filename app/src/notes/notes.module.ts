import { Body, Controller, Get, Injectable, Module, Param, Post } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
import type { Note } from '@teachback/contracts';

class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  content = '';
}

@Injectable()
class NotesService {
  private readonly notes: Note[] = [];

  findAll() {
    return this.notes;
  }

  findOne(id: string) {
    return this.notes.find((note) => note.id === id) ?? null;
  }

  create(input: CreateNoteDto) {
    const now = new Date().toISOString();
    const note: Note = { id: crypto.randomUUID(), ...input, createdAt: now, updatedAt: now };
    this.notes.unshift(note);
    return note;
  }
}

@Controller('notes')
class NotesController {
  constructor(private readonly notes: NotesService) {}

  @Get()
  list() { return this.notes.findAll(); }

  @Get(':id')
  get(@Param('id') id: string) { return this.notes.findOne(id); }

  @Post()
  create(@Body() input: CreateNoteDto) { return this.notes.create(input); }
}

@Module({ controllers: [NotesController], providers: [NotesService] })
export class NotesModule {}
