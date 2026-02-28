import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAutomation } from './office-automation';

describe('OfficeAutomation', () => {
  let component: OfficeAutomation;
  let fixture: ComponentFixture<OfficeAutomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeAutomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeAutomation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
