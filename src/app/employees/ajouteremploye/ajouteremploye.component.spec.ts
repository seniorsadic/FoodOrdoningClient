import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteremployeComponent } from './ajouteremploye.component';

describe('AjouteremployeComponent', () => {
  let component: AjouteremployeComponent;
  let fixture: ComponentFixture<AjouteremployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteremployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
