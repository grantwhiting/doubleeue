import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProjectModalComponent } from './custom-project-modal.component';

describe('CustomProjectModalComponent', () => {
  let component: CustomProjectModalComponent;
  let fixture: ComponentFixture<CustomProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
