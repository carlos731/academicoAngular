import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBadgeNivelComponent } from './form-badge-nivel.component';

describe('FormBadgeNivelComponent', () => {
  let component: FormBadgeNivelComponent;
  let fixture: ComponentFixture<FormBadgeNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBadgeNivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBadgeNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
