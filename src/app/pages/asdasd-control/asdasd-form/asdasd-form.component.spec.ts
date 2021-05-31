import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdasdFormComponent } from './asdasd-form.component';

describe('AsdasdFormComponent', () => {
  let component: AsdasdFormComponent;
  let fixture: ComponentFixture<AsdasdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsdasdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdasdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
