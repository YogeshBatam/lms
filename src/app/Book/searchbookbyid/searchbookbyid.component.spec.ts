import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbookbyidComponent } from './searchbookbyid.component';

describe('SearchbookbyidComponent', () => {
  let component: SearchbookbyidComponent;
  let fixture: ComponentFixture<SearchbookbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbookbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbookbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
