import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplateSearchComponent } from './email-template-search.component';

describe('EmailTemplateFinderComponent', () => {
  let component: EmailTemplateSearchComponent;
  let fixture: ComponentFixture<EmailTemplateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTemplateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTemplateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
