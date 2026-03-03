import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamosTestView } from './camos-test-view';

describe('CamosTestView', () => {
  let component: CamosTestView;
  let fixture: ComponentFixture<CamosTestView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamosTestView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamosTestView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
