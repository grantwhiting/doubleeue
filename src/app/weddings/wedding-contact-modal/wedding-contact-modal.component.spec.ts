import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingContactModalComponent } from './wedding-contact-modal.component';

describe('WeddingContactModalComponent', () => {
  let component: WeddingContactModalComponent;
  let fixture: ComponentFixture<WeddingContactModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingContactModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
