import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebookDetailsComponent } from './issuebook-details.component';

describe('IssuebookDetailsComponent', () => {
  let component: IssuebookDetailsComponent;
  let fixture: ComponentFixture<IssuebookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuebookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuebookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
