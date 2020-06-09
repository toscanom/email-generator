import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JobListingSearchComponent} from './job-listing-search.component';

describe('JobListingSearchComponent', () => {
  let component: JobListingSearchComponent;
  let fixture: ComponentFixture<JobListingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobListingSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
