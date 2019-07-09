import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaPage } from './seconda.page';

describe('SecondaPage', () => {
  let component: SecondaPage;
  let fixture: ComponentFixture<SecondaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
