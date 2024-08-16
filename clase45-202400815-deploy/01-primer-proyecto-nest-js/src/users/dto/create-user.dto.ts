import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateUserDto {

    @IsString({message:"first_name es requerido, y tiene que ser un string"})
    first_name:string


    @IsString()
    last_name:string


    @IsString()
    email:string


    @IsString()
    password:string

    @IsNumber()
    @IsOptional()
    age?: number

    @IsString()
    role?:string

}
