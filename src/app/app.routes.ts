import { UsefactoryInjectionComponent } from './usefactory-injection/usefactory-injection.component';
import { PropertyInjectionComponent } from './property-injection/property-injection.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConstructorInjectionComponent } from './constructor-injection/constructor-injection.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ci', component: ConstructorInjectionComponent },
  { path: 'pi', component: PropertyInjectionComponent },
  { path: 'ui', component: UsefactoryInjectionComponent },
  { path: 'state', component: StateManagementComponent },
  { path: 'counter', component: CounterComponent },
];
