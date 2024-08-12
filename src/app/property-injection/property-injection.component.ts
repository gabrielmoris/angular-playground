import { Component, Inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-property-injection',
  templateUrl: './property-injection.component.html',
  styleUrls: ['./property-injection.component.css'],
})
export class PropertyInjectionComponent {
  constructor(private dataService: DataService) {}
  @Inject(DataService)
  getData() {
    return this.dataService.getData();
  }
}
