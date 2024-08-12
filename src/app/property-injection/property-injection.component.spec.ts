import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInjectionComponent } from './property-injection.component';

describe('PropertyInjectionComponent', () => {
  let component: PropertyInjectionComponent;
  let fixture: ComponentFixture<PropertyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
