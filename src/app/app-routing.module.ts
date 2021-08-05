import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { HelloComponent } from './components/hello/hello.component';
import { WorldComponent } from './components/world/world.component';
import { ProfileComponent } from './components/profile/profile.component';

// route paths
import routes from './routes';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: routes.home, component: HomeComponent },
      { path: routes.hello, component: HelloComponent },
      { path: routes.world, component: WorldComponent },
      { path: routes.profile, component: ProfileComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
