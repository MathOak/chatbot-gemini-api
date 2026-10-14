import { Body, Controller, Get, Post } from '@nestjs/common';
import { BOOK_CATALOG } from '../catalog';
import { GeminiService } from '../gemini/gemini.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller()
export class ChatController {
  constructor(private readonly gemini: GeminiService) {}

  @Get('health')
  health(): { status: string } {
    return { status: 'ok' };
  }

  @Get('books')
  books(): typeof BOOK_CATALOG {
    return BOOK_CATALOG;
  }

  @Post('chat')
  sendMessage(@Body() body: SendMessageDto) {
    return this.gemini.reply(body.history);
  }
}
