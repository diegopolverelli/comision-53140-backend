import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/sessions')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("register")
  create(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})) createUserDto: CreateUserDto) {
    // let {age}=createUserDto
    // if(!age){

    // }
    // createUserDto.first_name="Juan"
    return this.usersService.create(createUserDto);
  }

  @Post("login")
  login(@Body() body: any) {
    let {email, password}=body
    if(!email || !password){
      throw new BadRequestException("Complete email y password")
    }

    return this.usersService.login(email, password);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
