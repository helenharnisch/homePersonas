import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalugasComponent } from './calugas.component';

describe('CalugasComponent', () => {
  let component: CalugasComponent;
  let fixture: ComponentFixture<CalugasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalugasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
