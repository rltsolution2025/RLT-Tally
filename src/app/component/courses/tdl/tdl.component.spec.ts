import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDLComponent } from './tdl.component';

describe('TDLComponent', () => {
  let component: TDLComponent;
  let fixture: ComponentFixture<TDLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
