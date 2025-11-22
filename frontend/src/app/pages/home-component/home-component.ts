import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar-component/calendar-component';

@Component({
  selector: 'home-component',
  imports: [CalendarComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
