import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookbypublisherComponent } from './search-bookbypublisher.component';

describe('SearchBookbypublisherComponent', () => {
  let component: SearchBookbypublisherComponent;
  let fixture: ComponentFixture<SearchBookbypublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookbypublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookbypublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
