import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTarreasComponent } from './detalle-tarreas.component';

describe('DetalleTarreasComponent', () => {
  let component: DetalleTarreasComponent;
  let fixture: ComponentFixture<DetalleTarreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTarreasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleTarreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
