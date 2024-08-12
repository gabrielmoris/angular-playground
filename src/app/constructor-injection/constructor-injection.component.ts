import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-constructor-injection',
  standalone: true,
  imports: [],
  templateUrl: './constructor-injection.component.html',
  styleUrl: './constructor-injection.component.css',
})
export class ConstructorInjectionComponent {
  constructor(private dataService: DataService) {}

  getData() {
    return this.dataService.getData();
  }
}
