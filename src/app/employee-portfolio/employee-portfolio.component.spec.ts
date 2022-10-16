import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePortfolioComponent } from './employee-portfolio.component';

describe('EmployeePortfolioComponent', () => {
  let component: EmployeePortfolioComponent;
  let fixture: ComponentFixture<EmployeePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
