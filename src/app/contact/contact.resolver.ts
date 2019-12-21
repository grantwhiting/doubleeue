import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IPage} from '../types/page';
import {PagesService} from '../services/pages/pages.service';

@Injectable()
export class ContactResolver implements Resolve<IPage> {

  private contactPageId = 23;

  constructor(private pageService: PagesService) { }

  resolve() {
    return this.pageService.getPageById(this.contactPageId);
  }
}
