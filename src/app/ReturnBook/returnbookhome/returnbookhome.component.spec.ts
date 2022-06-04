import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookhomeComponent } from './returnbookhome.component';

describe('ReturnbookhomeComponent', () => {
  let component: ReturnbookhomeComponent;
  let fixture: ComponentFixture<ReturnbookhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbookhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbookhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
