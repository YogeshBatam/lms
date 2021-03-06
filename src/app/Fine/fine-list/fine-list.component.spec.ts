import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineListComponent } from './fine-list.component';

describe('FineListComponent', () => {
  let component: FineListComponent;
  let fixture: ComponentFixture<FineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
