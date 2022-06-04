import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIssuebookComponent } from './create-issuebook.component';

describe('CreateIssuebookComponent', () => {
  let component: CreateIssuebookComponent;
  let fixture: ComponentFixture<CreateIssuebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIssuebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIssuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
