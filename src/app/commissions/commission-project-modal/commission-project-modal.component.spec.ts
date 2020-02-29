import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CommissionProjectModalComponent} from './commission-project-modal.component';

describe('CommissionProjectModalComponent', () => {
  let component: CommissionProjectModalComponent;
  let fixture: ComponentFixture<CommissionProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
