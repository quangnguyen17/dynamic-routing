import { Component } from '@angular/core';
import routes from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamic-routing';
  routes: { [key: string]: string } = {};

  constructor() {
    this.routes = routes;
  }
}
