import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieremployeComponent } from './modifieremploye.component';

describe('ModifieremployeComponent', () => {
  let component: ModifieremployeComponent;
  let fixture: ComponentFixture<ModifieremployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieremployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
