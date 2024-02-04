import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { subDays, startOfDay, addDays } from 'date-fns';
import { CanchasService } from '../canchas.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  canchas!: any[];

  constructor(private router: Router, private canchasSercice: CanchasService) {}


  ngOnInit() {
    this.canchas = this.canchasSercice.getCanchas();
  }
}
