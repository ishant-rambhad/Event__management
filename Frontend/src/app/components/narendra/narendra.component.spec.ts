import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarendraComponent } from './narendra.component';

describe('NarendraComponent', () => {
  let component: NarendraComponent;
  let fixture: ComponentFixture<NarendraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarendraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarendraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
