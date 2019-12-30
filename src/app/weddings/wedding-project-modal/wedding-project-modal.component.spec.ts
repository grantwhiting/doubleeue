import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingProjectModalComponent } from './wedding-project-modal.component';

describe('WeddingProjectModalComponent', () => {
  let component: WeddingProjectModalComponent;
  let fixture: ComponentFixture<WeddingProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
