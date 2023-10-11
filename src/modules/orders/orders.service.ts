import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';
import { ApiResponse } from 'src/common/types/ApiResponse.type';
import { Package } from '../package/entities/package.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order')
    private readonly orderModel: Model<Order>,
    @InjectModel('Package')
    private readonly packageModel: Model<Package>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<ApiResponse> {
    try {
      // Create an array to hold the items with additional package data
      const itemsWithPackageData = [];

      // Validate and update quantities for each item
      for (const item of createOrderDto.items) {
        const packageItem = await this.packageModel.findById(item.id);

        if (!packageItem) {
          throw new Error(`Package not found for ID: ${item.id}`);
        }

        if (item.quantity > packageItem.quantity) {
          throw new Error(
            `Package not available for ID: ${item.id}, there are only ${packageItem.quantity} left`,
          );
        }

        // Update the quantity of the package item
        packageItem.quantity -= item.quantity;
        await packageItem.save();

        // Add the item with the additional package data to the array
        itemsWithPackageData.push({
          ...packageItem.toObject(),
          quantity: item.quantity, // Add the ordered quantity
        });
      }

      // Create the order with the items array filled with the actual package data
      const createdOrder = new this.orderModel({
        ...createOrderDto,
        items: itemsWithPackageData,
      });

      await createdOrder.save();

      return {
        statusCode: 201,
        message: 'Order created successfully',
        data: createdOrder,
      };
    } catch (error) {
      // Handle errors here
      return {
        statusCode: 400,
        message: error.message,
        data: null,
      };
    }
  }

  async findAll(): Promise<ApiResponse> {
    const orders = await this.orderModel.find();

    return {
      statusCode: 200,
      message: 'Orders retrieved successfully',
      data: orders,
    };
  }

  async findOne(id: string): Promise<ApiResponse> {
    const findOrder = await this.orderModel.findById(id);

    if (!findOrder)
      return { statusCode: 404, message: 'Order not found', data: null };

    return {
      statusCode: 200,
      message: 'Order retrieved successfully',
      data: findOrder,
    };
  }

  async update(
    id: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<ApiResponse> {
    const updatedOrder = await this.orderModel.findByIdAndUpdate(
      id,
      updateOrderDto,
    );

    if (!updatedOrder)
      return { statusCode: 404, message: 'Order not found', data: null };

    if (updateOrderDto.items) {
      return {
        statusCode: 400,
        message: 'Items cannot be updated',
        data: null,
      };
    }

    return {
      statusCode: 200,
      message: 'Order updated successfully',
      data: updatedOrder,
    };
  }

  async remove(id: string): Promise<ApiResponse> {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id);

    if (!deletedOrder)
      return { statusCode: 404, message: 'Order not found', data: null };

    return {
      statusCode: 200,
      message: 'Order deleted successfully',
      data: deletedOrder,
    };
  }
}
