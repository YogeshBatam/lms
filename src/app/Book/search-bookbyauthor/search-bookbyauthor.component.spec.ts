import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookbyauthorComponent } from './search-bookbyauthor.component';

describe('SearchBookbyauthorComponent', () => {
  let component: SearchBookbyauthorComponent;
  let fixture: ComponentFixture<SearchBookbyauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookbyauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
