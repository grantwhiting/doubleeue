import {IProductImage} from './product-image';
import {IGalleryItem} from './gallery-item';

export interface IProject {
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
  project_image: IProductImage;
  gallery: IGalleryItem[];
  tag: string;
}

export interface IProjectIdAndImage {
  id: number;
  image: IProductImage;
}
