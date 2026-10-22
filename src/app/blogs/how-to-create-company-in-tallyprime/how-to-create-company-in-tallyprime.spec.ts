import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCreateCompanyInTallyprime } from './how-to-create-company-in-tallyprime';

describe('HowToCreateCompanyInTallyprime', () => {
  let component: HowToCreateCompanyInTallyprime;
  let fixture: ComponentFixture<HowToCreateCompanyInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCreateCompanyInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCreateCompanyInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
