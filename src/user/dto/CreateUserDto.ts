import { IsString, IsNotEmpty, MinLength, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Fullname is required' })
  fullName: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  phone: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
