import { TestBed } from '@angular/core/testing';

import { ArticleStatusService } from './article-status.service';

describe('ArticleStatusService', () => {
  let service: ArticleStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
