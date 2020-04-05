import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPage} from '../types/page.type';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';

@Component({
  selector: 'du-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeEnterLeaveAnimation]
})
export class AboutComponent implements OnInit {
  pageContent: IPage;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ page }) => this.pageContent = page);
  }
}
