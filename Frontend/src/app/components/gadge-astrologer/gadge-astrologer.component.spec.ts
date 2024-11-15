import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgeAstrologerComponent } from './gadge-astrologer.component';

describe('GadgeAstrologerComponent', () => {
  let component: GadgeAstrologerComponent;
  let fixture: ComponentFixture<GadgeAstrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GadgeAstrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GadgeAstrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
