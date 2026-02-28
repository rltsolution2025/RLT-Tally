import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refer } from './refer';

describe('Refer', () => {
  let component: Refer;
  let fixture: ComponentFixture<Refer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Refer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
