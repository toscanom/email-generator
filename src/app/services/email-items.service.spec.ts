import { TestBed } from '@angular/core/testing';

import { EmailItemsService } from './email-items.service';

describe('EmailItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailItemsService = TestBed.get(EmailItemsService);
    expect(service).toBeTruthy();
  });
});
