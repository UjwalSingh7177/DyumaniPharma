import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursel1 } from './coursel1';

describe('Coursel1', () => {
  let component: Coursel1;
  let fixture: ComponentFixture<Coursel1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursel1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursel1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
