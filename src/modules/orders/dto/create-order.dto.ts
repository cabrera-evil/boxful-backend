import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Item } from '../interfaces/item.interface';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  pickupAddress: string;

  @IsDateString()
  @IsNotEmpty()
  scheduledDate: Date;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  @IsNotEmpty()
  municipality: string;

  @IsString()
  @IsNotEmpty()
  referencePoint: string;

  @IsString()
  @IsNotEmpty()
  specialInstructions: string;

  @IsArray()
  @IsNotEmpty()
  items: Item[];

  constructor(
    pickupAddress: string,
    scheduledDate: Date,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    deliveryAddress: string,
    department: string,
    municipality: string,
    referencePoint: string,
    specialInstructions: string,
    items: Item[],
  ) {
    this.pickupAddress = pickupAddress;
    this.scheduledDate = scheduledDate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.deliveryAddress = deliveryAddress;
    this.department = department;
    this.municipality = municipality;
    this.referencePoint = referencePoint;
    this.specialInstructions = specialInstructions;
    this.items = items;
  }
}
