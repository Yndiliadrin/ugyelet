import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdasdComponent } from './asdasd.component';

describe('AsdasdComponent', () => {
  let component: AsdasdComponent;
  let fixture: ComponentFixture<AsdasdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsdasdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdasdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
