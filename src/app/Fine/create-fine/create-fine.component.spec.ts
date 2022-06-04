import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFineComponent } from './create-fine.component';

describe('CreateFineComponent', () => {
  let component: CreateFineComponent;
  let fixture: ComponentFixture<CreateFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
