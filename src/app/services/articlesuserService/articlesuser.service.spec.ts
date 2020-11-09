import { TestBed } from '@angular/core/testing';

import { ArticlesuserService } from './articlesuser.service';

describe('ArticlesuserService', () => {
  let service: ArticlesuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
