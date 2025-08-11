import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';
import { Roles } from 'src/roles/roles.enum';
import { Role } from 'src/types/auth.types';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  age: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsOptional()
  @IsDateString() 
  birthdate?: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsEnum(Roles, { message: 'role must be one of: donor, doctor, hospital, admin' })
  role?: Role;
}

