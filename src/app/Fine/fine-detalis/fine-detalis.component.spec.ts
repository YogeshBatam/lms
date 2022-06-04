import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineDetalisComponent } from './fine-detalis.component';

describe('FineDetalisComponent', () => {
  let component: FineDetalisComponent;
  let fixture: ComponentFixture<FineDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FineDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
