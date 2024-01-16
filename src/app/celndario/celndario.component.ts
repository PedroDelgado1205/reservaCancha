import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-celndario',
  templateUrl: './celndario.component.html',
  styleUrls: ['./celndario.component.css']
})
export class CelndarioComponent implements OnInit {
  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  monthSelect!: any[];
  dateSelect: any;
  dateValue: any;

  constructor() {}

  ngOnInit(): void {
    this.getDaysFromDate(1, 2024);
  }

  getDaysFromDate(month: number, year: number) {
    const startDate = moment([year, month - 1, 1]).startOf('month');
    const endDate = moment([year, month - 1]).endOf('month');
    this.dateSelect = startDate;

    const arrayDays = [];
    let currentDay = startDate.clone();

    while (currentDay.isSameOrBefore(endDate, 'day')) {
      arrayDays.push({
        name: currentDay.format("dddd"),
        value: currentDay.date(),
        indexWeek: currentDay.isoWeekday()
      });

      currentDay.add(1, 'day');
    }

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    this.dateSelect.add(flag, 'month');
    this.getDaysFromDate(this.dateSelect.month() + 1, this.dateSelect.year());
  }

  clickDay(day: { value: any }) {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`;
    const objectDate = moment(parse);
    this.dateValue = objectDate;
  }
}