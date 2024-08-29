import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbuttonComponent } from './loginbutton.component';

describe('LoginbuttonComponent', () => {
  let component: LoginbuttonComponent;
  let fixture: ComponentFixture<LoginbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginbuttonComponent]
    });
    fixture = TestBed.createComponent(LoginbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
