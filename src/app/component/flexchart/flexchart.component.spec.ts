import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexchartComponent } from './flexchart.component';

describe('FlexchartComponent', () => {
  let component: FlexchartComponent;
  let fixture: ComponentFixture<FlexchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
