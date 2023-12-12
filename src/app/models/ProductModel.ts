import { ImageModel } from "./ImageModel";

export class ProductModel {
    constructor(public id: number, public name: string, public description: string, public price: number, public image: ImageModel) { }
}