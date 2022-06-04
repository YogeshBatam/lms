import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookDetailsComponent } from './returnbook-details.component';

describe('ReturnbookDetailsComponent', () => {
  let component: ReturnbookDetailsComponent;
  let fixture: ComponentFixture<ReturnbookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
