import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalistDashboardComponent } from './journalist-dashboard.component';

describe('JournalistDashboardComponent', () => {
  let component: JournalistDashboardComponent;
  let fixture: ComponentFixture<JournalistDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalistDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
