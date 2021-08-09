import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  static PATH = 'profile/:userId';

  userId: string = '';

  // constructor(private route: ActivatedRoute) {}
  constructor() {}

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.userId = params.userId;
    // });
  }
}
