import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialAdminComponent } from './historial-admin/historial-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'reserva/:id', component: ReservaComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'historialAdmin', component: HistorialAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
