import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {IProduct} from '../types/product';

@Component({
  selector: 'du-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit, OnDestroy {
  pod: IProduct;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ pod }) => this.pod = pod);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
