import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBookDashBoardComponent } from './issue-book-dash-board.component';

describe('IssueBookDashBoardComponent', () => {
  let component: IssueBookDashBoardComponent;
  let fixture: ComponentFixture<IssueBookDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueBookDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBookDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
