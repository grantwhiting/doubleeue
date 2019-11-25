import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../services/form.service';
import {IPage} from '../types/page';

@Component({
  selector: 'du-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  form: FormGroup;
  pageContent: IPage;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formService: FormService) {

    this.form = formBuilder.group({
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactMessage: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ page }) => this.pageContent = page);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

  postForm() {
    this.formService.postFormData(this.form.value);
  }
}
