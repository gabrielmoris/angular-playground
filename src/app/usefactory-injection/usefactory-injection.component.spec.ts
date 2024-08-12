import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefactoryInjectionComponent } from './usefactory-injection.component';

describe('UsefactoryInjectionComponent', () => {
  let component: UsefactoryInjectionComponent;
  let fixture: ComponentFixture<UsefactoryInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefactoryInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefactoryInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
