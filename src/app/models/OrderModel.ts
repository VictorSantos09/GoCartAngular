import { ProductModel } from './ProductModel';
export class OrderModel {
    constructor(public id: number, public product: ProductModel, public amount: number) { }
}