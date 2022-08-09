import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiaceComponent } from './piace.component';

describe('PiaceComponent', () => {
  let component: PiaceComponent;
  let fixture: ComponentFixture<PiaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiaceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
