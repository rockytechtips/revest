import { Controller, Post, Body, Get } from '@nestjs/common'
import { OrdersService } from './orders.service'

@Controller('orders')
export class OrdersController {

  constructor(private readonly orderService: OrdersService) {}

  @Post()
  create(@Body() body) {

    return this.orderService.create(
      body.productId,
      body.quantity
    )

  }

  @Get()
  findAll() {
    return this.orderService.findAll()
  }

}