import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import e from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  // private readonly users:any[]
  private readonly users:User[]

  constructor(@InjectModel(Users.name) private usersModel: Model<Users>){
    this.users=[
      {
        id: 1,
        first_name: 'Diego',
        last_name: 'Polverelli',
        email: 'diegopolverelli@hotmail.com',
        password: '123',
        age: 46
      },
      {
        id: 2,
        first_name: 'Ramón',
        last_name: 'Diaz',
        email: 'rdiaz@test.com',
        password: '123',
        age: 60
      },
    ]
  }

  create(createUserDto: CreateUserDto) {
    // this.users.push(2)
    // this.users.push("Juan")
    // this.users.push({id:1, name:"Pedro"})
    let id=1
    if(this.users.length>0){
      id=Math.max(...this.users.map(d=>d.id))+1
    }
    let nuevoUsuario={id, ...createUserDto}
    this.users.push(nuevoUsuario)

    this.usersModel.create(createUserDto)

    return nuevoUsuario;
  }

  login(email:string, password:string){
    // algo
    // console.log(fafafa)
    let usuario=this.users.find(u=>u.email===email && u.password===password)
    if(!usuario){
      throw new BadRequestException("Credenciales incorrectas")
    }

    return {message: "Login exitoso", usuario}
  }

  findAll() {
    // return `This action returns all users`;
    return this.usersModel.find().lean()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
