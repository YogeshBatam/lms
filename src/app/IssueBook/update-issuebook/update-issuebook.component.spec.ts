import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIssuebookComponent } from './update-issuebook.component';

describe('UpdateIssuebookComponent', () => {
  let component: UpdateIssuebookComponent;
  let fixture: ComponentFixture<UpdateIssuebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIssuebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIssuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
