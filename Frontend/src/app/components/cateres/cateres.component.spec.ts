import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateresComponent } from './cateres.component';

describe('CateresComponent', () => {
  let component: CateresComponent;
  let fixture: ComponentFixture<CateresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
