import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCuisineComponent } from './modifier-cuisine.component';

describe('ModifierCuisineComponent', () => {
  let component: ModifierCuisineComponent;
  let fixture: ComponentFixture<ModifierCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
