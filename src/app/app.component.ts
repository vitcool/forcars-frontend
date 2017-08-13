import { Component } from '@angular/core';
import { CarDataService } from "./services/car-data.service";

@Component({
  selector: 'app-root',
  providers: [CarDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forcars';
}
