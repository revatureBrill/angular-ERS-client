import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreimbursementsComponent } from './viewreimbursements.component';

describe('ViewreimbursementsComponent', () => {
  let component: ViewreimbursementsComponent;
  let fixture: ComponentFixture<ViewreimbursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreimbursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
