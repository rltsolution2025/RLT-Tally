import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonFullStackComponent } from './python-full-stack.component';

describe('PythonFullStackComponent', () => {
  let component: PythonFullStackComponent;
  let fixture: ComponentFixture<PythonFullStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonFullStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythonFullStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
