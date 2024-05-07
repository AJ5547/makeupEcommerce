import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonNav } from '@ionic/angular/standalone';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonNav, HttpClientModule],
})
export class AppComponent {
  constructor() { }
  component = HomePage;
}
