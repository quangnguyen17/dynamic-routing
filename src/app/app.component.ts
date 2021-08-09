import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelloComponent } from './components/hello/hello.component';
import { WorldComponent } from './components/world/world.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamic-routing';
  PATH = {
    home: HomeComponent.PATH,
    hello: HelloComponent.PATH,
    world: WorldComponent.PATH,
    profile: ProfileComponent.PATH,
  };
}
