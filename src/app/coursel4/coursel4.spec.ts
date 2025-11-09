import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursel4 } from './coursel4';

describe('Coursel4', () => {
  let component: Coursel4;
  let fixture: ComponentFixture<Coursel4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursel4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursel4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
