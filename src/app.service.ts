import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Backend de sistema de Compras e Inventarios!';
  }
  getElAutor(): string {
    return 'Autor: Fredy Genovez';
  }
}