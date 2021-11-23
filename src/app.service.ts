import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getElAutor(): string {
    return 'Autor: Fredy Genovez';
  }
}