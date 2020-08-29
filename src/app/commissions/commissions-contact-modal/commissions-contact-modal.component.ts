import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form/form.service';
import {Subject} from 'rxjs';
import {contactForm7CommissionsApi} from '../../services/apis';
import {takeUntil} from 'rxjs/operators';
import {fadeScaleEnterLeaveAnimation} from '../../animations/fade-scale-enter-leave.animation';

@Component({
  selector: 'du-commissions-contact-modal',
  templateUrl: './commissions-contact-modal.component.html',
  styleUrls: ['./commissions-contact-modal.component.scss'],
  animations: [fadeScaleEnterLeaveAnimation]
})
export class CommissionsContactModalComponent implements OnDestroy {
  form: FormGroup;
  showConfirmation: boolean;
  showRequiredMessage: boolean;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService) {
    this.form = formBuilder.group({
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactPhoneNumber: [''],
      commissionProject: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  postForm() {
    if (!this.form.valid) {
      this.showRequiredMessage = true;
      return;
    }
    this.formService.postFormData(this.form.value, contactForm7CommissionsApi)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(response => {
        if (response) {
          this.showConfirmation = true;
          this.form.reset();
        }
      });
  }
}
