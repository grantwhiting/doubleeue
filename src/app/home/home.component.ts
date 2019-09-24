import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProduct } from '../types/product';

@Component({
  selector: 'du-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  products: IProduct[] = [
    {
      product_name: 'Weddings',
      product_description: 'This is a description for weddings',
      product_image: {
        guid: 'https://via.placeholder.com/350'
      }
    },
    {
      product_name: 'Product 2',
      product_description: 'This is a description for product 2',
      product_image: {
        guid: 'https://via.placeholder.com/350'
      }
    },
    {
      product_name: 'Product 3',
      product_description: 'This is a description for product 3',
      product_image: {
        guid: 'https://via.placeholder.com/350'
      }
    }
  ];

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.data
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe(data => this.products = data.items);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
