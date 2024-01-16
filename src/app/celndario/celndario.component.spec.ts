import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelndarioComponent } from './celndario.component';

describe('CelndarioComponent', () => {
  let component: CelndarioComponent;
  let fixture: ComponentFixture<CelndarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelndarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelndarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
