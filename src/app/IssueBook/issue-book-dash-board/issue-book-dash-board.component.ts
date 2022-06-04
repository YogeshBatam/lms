import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-book-dash-board',
  templateUrl: './issue-book-dash-board.component.html',
  styleUrls: ['./issue-book-dash-board.component.css']
})
export class IssueBookDashBoardComponent implements OnInit {
  title = 'LMS';
  constructor() { }

  ngOnInit(): void {
  }

}
