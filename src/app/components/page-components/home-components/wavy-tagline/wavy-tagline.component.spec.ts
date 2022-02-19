import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyTaglineComponent } from './wavy-tagline.component';

describe('WavyTaglineComponent', () => {
  let component: WavyTaglineComponent;
  let fixture: ComponentFixture<WavyTaglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyTaglineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyTaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
