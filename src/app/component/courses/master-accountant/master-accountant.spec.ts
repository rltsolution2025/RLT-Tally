import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAccountant } from './master-accountant';

describe('MasterAccountant', () => {
  let component: MasterAccountant;
  let fixture: ComponentFixture<MasterAccountant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterAccountant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterAccountant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
