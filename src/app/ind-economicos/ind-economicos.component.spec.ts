import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndEconomicosComponent } from './ind-economicos.component';

describe('IndEconomicosComponent', () => {
  let component: IndEconomicosComponent;
  let fixture: ComponentFixture<IndEconomicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndEconomicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndEconomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
