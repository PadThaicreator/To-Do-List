import { Component } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'not-found-component',
  imports: [],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css',
})
export class NotFoundComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); 
  }
}
