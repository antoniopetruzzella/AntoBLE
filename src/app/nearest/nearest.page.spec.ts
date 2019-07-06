import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestPage } from './nearest.page';

describe('NearestPage', () => {
  let component: NearestPage;
  let fixture: ComponentFixture<NearestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
