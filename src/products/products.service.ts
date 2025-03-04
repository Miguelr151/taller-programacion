import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private products = [];

  constructor() {
    this.loadData();
  }

  private loadData() {
    try {
        const filePath = path.join(__dirname, '..', '..', 'data', 'products.json');
      console.log('📂 Buscando archivo en:', filePath);

      if (!fs.existsSync(filePath)) {
        throw new Error(`Archivo no encontrado: ${filePath}`);
      }

      const jsonData = fs.readFileSync(filePath, 'utf8');
      this.products = JSON.parse(jsonData);

      console.log('📦 Productos cargados:', this.products);
    } catch (error) {
      console.error('❌ Error cargando los productos:', error.message);
      this.products = [];
    }
  }

  findAll() {
    return this.products;
  }

  findOneById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
