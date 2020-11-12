import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalistCRUDComponent } from './journalist-crud.component';

describe('JournalistCRUDComponent', () => {
  let component: JournalistCRUDComponent;
  let fixture: ComponentFixture<JournalistCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalistCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalistCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
