import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from './product.interface'

@Injectable()
export class ProductsService {

  private products: Product[] = []
  private idCounter = 1

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = { id: this.idCounter++, ...product }
    this.products.push(newProduct)
    return newProduct
  }

  findAll(): Product[] {
    return this.products
  }

  findOne(id: number): Product {

    const product = this.products.find(p => p.id === id)

    if (!product) {
      throw new NotFoundException(`Product ${id} not found`)
    }

    return product
  }

  update(id: number, data: Partial<Product>) {
    const product = this.findOne(id)
    Object.assign(product, data)
    return product
  }

  delete(id: number) {

    const index = this.products.findIndex(p => p.id === id)

    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`)
    }

    this.products.splice(index, 1)

    return { message: "Product deleted successfully" }
  }

}