import { IProductImage } from './product-image.type';
import {IGalleryItem} from './gallery-item.type';

export interface IProduct {
  id: number;
  fate: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  template: string;
  product_image: IProductImage;
  gallery: IGalleryItem[];
}
