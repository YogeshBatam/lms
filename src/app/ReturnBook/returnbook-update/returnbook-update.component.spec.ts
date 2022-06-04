import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookUpdateComponent } from './returnbook-update.component';

describe('ReturnbookUpdateComponent', () => {
  let component: ReturnbookUpdateComponent;
  let fixture: ComponentFixture<ReturnbookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbookUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
