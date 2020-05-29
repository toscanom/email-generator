import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetContentsComponent } from './spreadsheet-contents.component';

describe('SpreadsheetContentsComponent', () => {
  let component: SpreadsheetContentsComponent;
  let fixture: ComponentFixture<SpreadsheetContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
