import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercatalogueComponent } from './ajoutercatalogue.component';

describe('AjoutercatalogueComponent', () => {
  let component: AjoutercatalogueComponent;
  let fixture: ComponentFixture<AjoutercatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
