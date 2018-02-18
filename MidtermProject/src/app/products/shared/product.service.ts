import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from './product.model';

@Injectable()
export class ProductService {

    productList: AngularFireList<any>;
    selectedProduct: Product = new Product();
    constructor(private firebase :AngularFireDatabase ) { }

    getData(){
      this.productList = this.firebase.list('products');
      return this.productList;
    }

    insertProduct(product : Product){

      this.productList.push({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price

      });
    }
}
