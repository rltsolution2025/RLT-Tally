import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeShortcutKeys } from './tallyprime-shortcut-keys';

describe('TallyprimeShortcutKeys', () => {
  let component: TallyprimeShortcutKeys;
  let fixture: ComponentFixture<TallyprimeShortcutKeys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeShortcutKeys]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeShortcutKeys);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
