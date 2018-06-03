import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcommandeComponent } from './reportcommande.component';

describe('ReportcommandeComponent', () => {
  let component: ReportcommandeComponent;
  let fixture: ComponentFixture<ReportcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
