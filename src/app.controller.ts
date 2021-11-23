import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

//+++ agregando oauth y jwt ++++
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard'

//+++

@ApiTags('SISPRI')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Autor')
  getAutor(): string {
    return this.appService.getElAutor();

  }
  
  //auth
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}