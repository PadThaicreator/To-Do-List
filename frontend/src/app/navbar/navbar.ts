import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  user: any = null;

  getUserFromStorage() {
    const data = localStorage.getItem('user');

    if (!data) return null;

    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing user data', error);
      return null;
    }
  }

  ngOnInit() {
    this.user = this.getUserFromStorage();
  }
}
