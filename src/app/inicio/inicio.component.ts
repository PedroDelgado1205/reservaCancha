import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { CanchasService } from '../canchas.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  canchas!: any[];

  constructor(private router: Router, private canchasSercice: CanchasService) {}


  ngOnInit() {
    this.canchas = this.canchasSercice.getCanchas();
  }

  reserva(i: number){
    this.router.navigate(['/reserva',i])
  }
}
