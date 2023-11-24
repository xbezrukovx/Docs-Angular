import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerBodyComponent } from './viewer-body.component';

describe('ViewerBodyComponent', () => {
  let component: ViewerBodyComponent;
  let fixture: ComponentFixture<ViewerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
