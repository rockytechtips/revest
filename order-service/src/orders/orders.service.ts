import { Injectable, HttpException } from '@nestjs/common'
import axios from 'axios'
import { Order } from './order.interface'

@Injectable()
export class OrdersService {

  private orders: Order[] = []
  private idCounter = 1

  async create(productId: number, quantity: number): Promise<Order> {

    try {

      const response = await axios.get(
        `http://localhost:3000/products/${productId}`
      )

      const product = response.data

      const order: Order = {
        id: this.idCounter++,
        product,
        quantity
      }

      this.orders.push(order)

      return order

    } catch (error) {

      throw new HttpException(
        "Product service unavailable or product not found",
        500
      )

    }

  }

  findAll(): Order[] {
    return this.orders
  }

}