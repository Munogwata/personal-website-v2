import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyProjectsCardsComponent } from './wavy-projects-cards.component';

describe('WavyProjectsCardsComponent', () => {
  let component: WavyProjectsCardsComponent;
  let fixture: ComponentFixture<WavyProjectsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyProjectsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyProjectsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
