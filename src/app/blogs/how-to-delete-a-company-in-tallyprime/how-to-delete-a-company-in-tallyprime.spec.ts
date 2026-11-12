import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToDeleteACompanyInTallyprime } from './how-to-delete-a-company-in-tallyprime';

describe('HowToDeleteACompanyInTallyprime', () => {
  let component: HowToDeleteACompanyInTallyprime;
  let fixture: ComponentFixture<HowToDeleteACompanyInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToDeleteACompanyInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToDeleteACompanyInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
