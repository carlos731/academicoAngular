import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBadgeComponent } from './tab-badge.component';

describe('TabBadgeComponent', () => {
  let component: TabBadgeComponent;
  let fixture: ComponentFixture<TabBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
