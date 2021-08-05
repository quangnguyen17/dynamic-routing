import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// components
import { HomeComponent } from './components/home/home.component';
import { HelloComponent } from './components/hello/hello.component';
import { WorldComponent } from './components/world/world.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: HomeComponent.PATH, component: HomeComponent },
      { path: HelloComponent.PATH, component: HelloComponent },
      { path: WorldComponent.PATH, component: WorldComponent },
      { path: ProfileComponent.PATH, component: ProfileComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
