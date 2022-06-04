import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineHomeComponent } from './fine-home.component';

describe('FineHomeComponent', () => {
  let component: FineHomeComponent;
  let fixture: ComponentFixture<FineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
