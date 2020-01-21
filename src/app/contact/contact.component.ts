import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../services/form/form.service';
import {IPage} from '../types/page';
import {fadeScaleEnterLeaveAnimation} from '../animations/fade-scale-enter-leave.animation';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';

@Component({
  selector: 'du-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeScaleEnterLeaveAnimation, fadeEnterLeaveAnimation]
})
export class ContactComponent implements OnInit, OnDestroy {
  form: FormGroup;
  pageContent: IPage;
  showConfirmation: boolean;

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
      .subscribe(({ page }) => this.pageContent = page);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

  showForm() {
    this.showConfirmation = false;
  }

  postForm() {
    if (!this.form.valid) {
      return;
    }
    this.formService.postFormData(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(response => {
        console.log(response);
        if (response) {
          this.showConfirmation = true;
          this.form.reset();
        }
      });
  }
}
