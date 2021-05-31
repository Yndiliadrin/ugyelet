import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdasdControlComponent } from './asdasd-control.component';

describe('AsdasdControlComponent', () => {
  let component: AsdasdControlComponent;
  let fixture: ComponentFixture<AsdasdControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsdasdControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdasdControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
