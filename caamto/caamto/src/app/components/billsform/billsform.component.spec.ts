import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsformComponent } from './billsform.component';

describe('BillsformComponent', () => {
  let component: BillsformComponent;
  let fixture: ComponentFixture<BillsformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillsformComponent]
    });
    fixture = TestBed.createComponent(BillsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
