import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  static PATH = '';

  users: string[] = ['Alex Otten', 'Quang Nguyen', 'Damon Douglas'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProfile(user: string): void {
    // generate user id
    const userId: string = user.toLowerCase().replace(/ /g, '-');

    // get route path
    const profileRoutePath = ProfileComponent.PATH.replace(`:userId`, userId);

    // navigate to profile
    this.router.navigate([`/${profileRoutePath}`]);
  }
}
