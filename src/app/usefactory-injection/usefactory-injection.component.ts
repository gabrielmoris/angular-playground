import { Component, Inject, Injectable, Optional } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-usefactory-injection',
  standalone: true,
  imports: [],
  templateUrl: './usefactory-injection.component.html',
  styleUrl: './usefactory-injection.component.css',
})
export class UsefactoryInjectionComponent {
  @Inject(DataService) @Optional() dataService?: DataService;

  getData() {
    if (this.dataService) {
      return this.dataService.getData();
    } else {
      // Handle the case where dataService is null
      return 'No data available';
    }
  }
}
