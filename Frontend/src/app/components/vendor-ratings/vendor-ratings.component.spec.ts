import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRatingsComponent } from './vendor-ratings.component';

describe('VendorRatingsComponent', () => {
  let component: VendorRatingsComponent;
  let fixture: ComponentFixture<VendorRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
