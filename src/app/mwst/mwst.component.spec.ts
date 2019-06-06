import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwstComponent } from './mwst.component';

describe('MwstComponent', () => {
  let component: MwstComponent;
  let fixture: ComponentFixture<MwstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
