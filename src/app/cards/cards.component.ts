import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IProduct} from '../types/product';

@Component({
  selector: 'du-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  product: IProduct;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ pods }) => this.product = pods);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
