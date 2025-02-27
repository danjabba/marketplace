import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from '../auth/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(userId: string, data: ProductDto) {

    if (!userId) {
      throw new Error('El sellerId es requerido');
    }
    return this.prisma.product.create({
      data: {
        name: data.name,
        sku: data.sku,
        quantity: data.quantity,
        price: data.price,
        seller: {
          connect: { id: userId }, 
        },
      },
      include: {
        seller: true, 
      },
    });
  }

  async getAllProducts() {
    return this.prisma.product.findMany();
  }

  async getProductsBySeller(sellerId: string) {
    return this.prisma.product.findMany({
      where: { sellerId },
    });
  }

  async updateProduct(id: string, data: Partial<ProductDto>) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    return this.prisma.product.delete({ where: { id } });
  }
}
