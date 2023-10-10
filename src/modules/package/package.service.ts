import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Package } from './entities/package.entity';
import { Model } from 'mongoose';
import { ApiResponse } from 'src/common/types/ApiResponse.type';

@Injectable()
export class PackageService {
  constructor(
    @InjectModel('Package')
    private readonly packageModel: Model<Package>,
  ) {}

  async create(createPackageDto: CreatePackageDto): Promise<ApiResponse> {
    const createdPackage = new this.packageModel(createPackageDto);
    await createdPackage.save();

    return {
      statusCode: 201,
      message: 'Package created successfully',
      data: createdPackage,
    };
  }

  async findAll(): Promise<ApiResponse> {
    const packages = await this.packageModel.find();

    return {
      statusCode: 200,
      message: 'Packages retrieved successfully',
      data: packages,
    };
  }

  async findOne(id: string): Promise<ApiResponse> {
    const findPackage = await this.packageModel.findById(id);

    if (!findPackage)
      return { statusCode: 404, message: 'Package not found', data: null };

    return {
      statusCode: 200,
      message: 'Package retrieved successfully',
      data: findPackage,
    };
  }

  async update(
    id: string,
    updatePackageDto: UpdatePackageDto,
  ): Promise<ApiResponse> {
    const updatedPackage = await this.packageModel.findByIdAndUpdate(
      id,
      updatePackageDto,
    );

    if (!updatedPackage)
      return { statusCode: 404, message: 'Package not found', data: null };

    return {
      statusCode: 200,
      message: 'Package updated successfully',
      data: updatedPackage,
    };
  }

  async remove(id: string): Promise<ApiResponse> {
    const deletedPackage = await this.packageModel.findByIdAndDelete(id);

    if (!deletedPackage)
      return { statusCode: 404, message: 'Package not found', data: null };

    return {
      statusCode: 200,
      message: 'Package deleted successfully',
      data: deletedPackage,
    };
  }
}
