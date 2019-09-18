import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'du-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  items: any[];

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => this.items = data.items);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

}
