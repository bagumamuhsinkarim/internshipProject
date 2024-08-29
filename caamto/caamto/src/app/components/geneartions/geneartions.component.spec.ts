import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneartionsComponent } from './geneartions.component';

describe('GeneartionsComponent', () => {
  let component: GeneartionsComponent;
  let fixture: ComponentFixture<GeneartionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneartionsComponent]
    });
    fixture = TestBed.createComponent(GeneartionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
