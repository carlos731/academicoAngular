import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBadgeCreateComponent } from './form-badge-create.component';

describe('FormBadgeCreateComponent', () => {
  let component: FormBadgeCreateComponent;
  let fixture: ComponentFixture<FormBadgeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBadgeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBadgeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
