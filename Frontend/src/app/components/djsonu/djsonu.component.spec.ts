import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjsonuComponent } from './djsonu.component';

describe('DjsonuComponent', () => {
  let component: DjsonuComponent;
  let fixture: ComponentFixture<DjsonuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjsonuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjsonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
