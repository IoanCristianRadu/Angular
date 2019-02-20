import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingCheatsheetComponent } from './data-binding-cheatsheet.component';

describe('DataBindingCheatsheetComponent', () => {
  let component: DataBindingCheatsheetComponent;
  let fixture: ComponentFixture<DataBindingCheatsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingCheatsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingCheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
