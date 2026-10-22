import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCreateMastersInTallyprime } from './how-to-create-masters-in-tallyprime';

describe('HowToCreateMastersInTallyprime', () => {
  let component: HowToCreateMastersInTallyprime;
  let fixture: ComponentFixture<HowToCreateMastersInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCreateMastersInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCreateMastersInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
