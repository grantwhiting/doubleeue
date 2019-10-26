import { IProductImage } from './product-image';

export interface IProduct {
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    product_image: IProductImage;
}
