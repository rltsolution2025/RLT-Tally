import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToManageMultipleGodownsInTallyprime } from './how-to-manage-multiple-godowns-in-tallyprime';

describe('HowToManageMultipleGodownsInTallyprime', () => {
  let component: HowToManageMultipleGodownsInTallyprime;
  let fixture: ComponentFixture<HowToManageMultipleGodownsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToManageMultipleGodownsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToManageMultipleGodownsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
