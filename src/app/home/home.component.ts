import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import { IProduct } from '../types/product';
import {takeUntil} from 'rxjs/operators';
import {cardAnimation} from '../animations/card.animation';

@Component({
  selector: 'du-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [cardAnimation]
})
export class HomeComponent implements OnInit, OnDestroy {
  products: IProduct[];

  private unsubscribe: Subject<void> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ pod }) => this.products = pod);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
