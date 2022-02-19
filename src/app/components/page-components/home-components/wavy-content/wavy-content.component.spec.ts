import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyContentComponent } from './wavy-content.component';

describe('WavyContentComponent', () => {
  let component: WavyContentComponent;
  let fixture: ComponentFixture<WavyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
