import { TestBed } from '@angular/core/testing';

import { SpreadsheetGeneratorService } from './spreadsheet-generator.service';

describe('SpreadsheetGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpreadsheetGeneratorService = TestBed.get(SpreadsheetGeneratorService);
    expect(service).toBeTruthy();
  });
});
