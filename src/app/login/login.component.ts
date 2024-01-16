import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { subDays, startOfDay, addDays } from 'date-fns';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router) {}

  navigateToOtroComponent(): void {
    this.router.navigate(['/inicio']);
  }
}
