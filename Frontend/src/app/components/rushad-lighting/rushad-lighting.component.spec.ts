import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushadLightingComponent } from './rushad-lighting.component';

describe('RushadLightingComponent', () => {
  let component: RushadLightingComponent;
  let fixture: ComponentFixture<RushadLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RushadLightingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RushadLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
