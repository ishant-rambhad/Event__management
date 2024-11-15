import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoshanPhotoComponent } from './roshan-photo.component';

describe('RoshanPhotoComponent', () => {
  let component: RoshanPhotoComponent;
  let fixture: ComponentFixture<RoshanPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoshanPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoshanPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
