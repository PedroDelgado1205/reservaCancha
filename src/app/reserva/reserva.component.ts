import { Component } from '@angular/core';
import { CanchasService } from '../canchas.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  canchas!: any[]; 
  i!: number;

  constructor(private canchasService: CanchasService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((paramas) => {
      this.i = paramas['id'];
      this.getCanchas();
    });
  }

  getCanchas(): void {
    this.canchas = this.canchasService.getCanchas(); // Ajusta el método según tu implementación en CanchasService
  }

}
