import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { subDays, startOfDay, addDays } from 'date-fns';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

  navigateToOtroComponent(): void {
    this.router.navigate(['/reserva']);
  }
}
