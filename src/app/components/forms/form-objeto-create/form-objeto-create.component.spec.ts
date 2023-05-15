import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjetoCreateComponent } from './form-objeto-create.component';

describe('FormObjetoCreateComponent', () => {
  let component: FormObjetoCreateComponent;
  let fixture: ComponentFixture<FormObjetoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormObjetoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormObjetoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
