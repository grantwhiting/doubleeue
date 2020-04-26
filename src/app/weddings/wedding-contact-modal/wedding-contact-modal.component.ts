import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form/form.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {fadeScaleEnterLeaveAnimation} from '../../animations/fade-scale-enter-leave.animation';

@Component({
  selector: 'du-wedding-contact-modal',
  templateUrl: './wedding-contact-modal.component.html',
  styleUrls: ['./wedding-contact-modal.component.scss'],
  animations: [fadeScaleEnterLeaveAnimation]
})
export class WeddingContactModalComponent implements OnDestroy {
  form: FormGroup;
  showConfirmation: boolean;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService) {

    this.form = formBuilder.group({
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactPhoneNumber: ['', Validators.required],
      instagramHandle: ['', Validators.required],
      weddingDate: [null, Validators.required],
      approxInvitations: [null, Validators.required],
      inspirations: ['', Validators.required], // wedding-style and inspirations
      contactMessage: ['', Validators.required], // tell me your love story
      dreamInvitationSuite: ['', Validators.required] // describe your dream wedding invitation suite
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
