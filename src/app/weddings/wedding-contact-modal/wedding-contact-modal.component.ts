import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form/form.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {fadeScaleEnterLeaveAnimation} from '../../animations/fade-scale-enter-leave.animation';
import {contactForm7WeddingApi} from '../../services/apis';

@Component({
  selector: 'du-wedding-contact-modal',
  templateUrl: './wedding-contact-modal.component.html',
  styleUrls: ['./wedding-contact-modal.component.scss'],
  animations: [fadeScaleEnterLeaveAnimation]
})
export class WeddingContactModalComponent implements OnDestroy {
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
      contactPhoneNumber: ['', Validators.required],
      instagramHandle: '',
      weddingDate: null,
      approxInvitations: null,
      inspirations: '',
      loveStory: '',
      dreamInvitationSuite: ''
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
    this.formService.postFormData(this.form.value, contactForm7WeddingApi)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(response => {
        if (response) {
          this.showConfirmation = true;
          this.form.reset();
        }
      });
  }
}
