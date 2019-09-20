import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenPage } from './main-screen.page';

describe('MainScreenPage', () => {
  let component: MainScreenPage;
  let fixture: ComponentFixture<MainScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
