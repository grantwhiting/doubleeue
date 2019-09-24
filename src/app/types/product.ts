import { IProductImage } from './product-image';

export interface IProduct {
    product_name: string;
    product_description: string;
    product_image: IProductImage;
}
