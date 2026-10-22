import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItLandingPage } from './it-landing-page';

describe('ItLandingPage', () => {
  let component: ItLandingPage;
  let fixture: ComponentFixture<ItLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItLandingPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
