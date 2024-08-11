import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'di', component: DependencyInjectionComponent },
  { path: 'state', component: StateManagementComponent },
  { path: 'counter', component: CounterComponent },
];
