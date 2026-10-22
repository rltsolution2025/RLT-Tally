import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyLandingPage } from './tally-landing-page';

describe('TallyLandingPage', () => {
  let component: TallyLandingPage;
  let fixture: ComponentFixture<TallyLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyLandingPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
