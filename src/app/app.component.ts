import { Component } from '@angular/core';
import { Ng2SearchPipe } from 'ng2-search-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'home';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
