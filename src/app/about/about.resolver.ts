import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {PagesService} from '../services/pages/pages.service';
import {IPage} from '../types/page';

@Injectable()
export class AboutResolver implements Resolve<IPage> {

  private aboutPageId = 21;

  constructor(private pagesService: PagesService) { }

  resolve() {
    return this.pagesService.getPageById(this.aboutPageId);
  }
}
