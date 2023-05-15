import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCursoCreateComponent } from './form-curso-create.component';

describe('FormCursoCreateComponent', () => {
  let component: FormCursoCreateComponent;
  let fixture: ComponentFixture<FormCursoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCursoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCursoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
