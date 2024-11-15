import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceRegaloComponent } from './dance-regalo.component';

describe('DanceRegaloComponent', () => {
  let component: DanceRegaloComponent;
  let fixture: ComponentFixture<DanceRegaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceRegaloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceRegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
