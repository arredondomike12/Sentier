import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorPage } from './conversor.page';

describe('ConversorPage', () => {
  let component: ConversorPage;
  let fixture: ComponentFixture<ConversorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
