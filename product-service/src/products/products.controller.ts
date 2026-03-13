import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() body) {
    return this.productService.create(body)
  }

  @Get()
  findAll() {
    return this.productService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.productService.update(+id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id)
  }

}