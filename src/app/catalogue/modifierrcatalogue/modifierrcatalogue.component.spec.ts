import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierrcatalogueComponent } from './modifierrcatalogue.component';

describe('ModifierrcatalogueComponent', () => {
  let component: ModifierrcatalogueComponent;
  let fixture: ComponentFixture<ModifierrcatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierrcatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierrcatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
