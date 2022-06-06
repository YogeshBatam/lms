import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookbynameComponent } from './search-bookbyname.component';

describe('SearchBookbynameComponent', () => {
  let component: SearchBookbynameComponent;
  let fixture: ComponentFixture<SearchBookbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
