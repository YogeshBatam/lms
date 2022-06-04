import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookCreateComponent } from './returnbook-create.component';

describe('ReturnbookCreateComponent', () => {
  let component: ReturnbookCreateComponent;
  let fixture: ComponentFixture<ReturnbookCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbookCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
