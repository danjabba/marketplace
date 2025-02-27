import { Controller, Post, Get, Put, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from '../auth/dto/product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestWithUser } from '../types/request-with-user';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req: RequestWithUser, @Body() data: ProductDto) {
  
    return this.productsService.createProduct(req.user.userId, data);
  }

  @Get()
  async findAll() {
    return this.productsService.getAllProducts();
  }

  @UseGuards(JwtAuthGuard)
  @Get('seller')
  async findBySeller(@Req() req: RequestWithUser) {
    return this.productsService.getProductsBySeller(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<ProductDto>) {
    return this.productsService.updateProduct(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
