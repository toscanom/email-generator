import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplateFinderComponent } from './email-template-finder.component';

describe('EmailTemplateFinderComponent', () => {
  let component: EmailTemplateFinderComponent;
  let fixture: ComponentFixture<EmailTemplateFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTemplateFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTemplateFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
