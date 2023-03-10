import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RNAPlotsComponent } from './rna-plots.component';

describe('RNAPlotsComponent', () => {
  let component: RNAPlotsComponent;
  let fixture: ComponentFixture<RNAPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RNAPlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RNAPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
