import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePackageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  length: number;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  weightInPounds: number;

  constructor(
    content: string,
    length: number,
    height: number,
    width: number,
    weightInPounds: number,
  ) {
    this.content = content;
    this.length = length;
    this.height = height;
    this.width = width;
    this.weightInPounds = weightInPounds;
  }
}
