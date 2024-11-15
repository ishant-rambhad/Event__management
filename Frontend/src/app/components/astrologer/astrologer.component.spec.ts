import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerComponent } from './astrologer.component';

describe('AstrologerComponent', () => {
  let component: AstrologerComponent;
  let fixture: ComponentFixture<AstrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
