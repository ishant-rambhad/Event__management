import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentBhagatComponent } from './tent-bhagat.component';

describe('TentBhagatComponent', () => {
  let component: TentBhagatComponent;
  let fixture: ComponentFixture<TentBhagatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TentBhagatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentBhagatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
