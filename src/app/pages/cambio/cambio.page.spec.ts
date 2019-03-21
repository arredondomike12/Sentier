import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioPage } from './cambio.page';

describe('CambioPage', () => {
  let component: CambioPage;
  let fixture: ComponentFixture<CambioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
