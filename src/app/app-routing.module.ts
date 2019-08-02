import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'nx-core';

import { HomeComponent } from './components/home/home.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsNewComponent } from './components/clients-new/clients-new.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { LoginComponent } from './components/login/login.component';

// YICC
import { MainComponent } from './components/main/main.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { RecurrentesComponent } from './components/pagos/recurrentes/recurrentes.component';
import { ServiciosComponent } from './components/pagos/servicios/servicios.component';
import { TarjetasComponent } from './components/pagos/tarjetas/tarjetas.component';
import { CreditosComponent } from './components/pagos/creditos/creditos.component';

// Pasos
import { Paso1Component } from './components/paso1/paso1.component';
import { Paso2Component } from './components/paso2/paso2.component';
import { Paso3Component } from './components/paso3/paso3.component';

// Pasos TC
import { Paso1TcComponent } from './components/paso1Tc/paso1Tc.component';
import { Paso2TcComponent } from './components/paso2Tc/paso2Tc.component';
import { Paso3TcComponent } from './components/paso3Tc/paso3Tc.component';

/**
 * Se agrega la configuracion de rutas.
 * Las rutas que requieran una validacion de acceso se aseguran con la propiedad canActivate.
 */
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent,
  children: [
    { path: 'pagos', component: PagosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'tarjetas', component: TarjetasComponent },
    { path: 'creditos', component: CreditosComponent },
    { path: 'paso1', component: Paso1Component },
    { path: 'paso2', component: Paso2Component },
    { path: 'paso3', component: Paso3Component },
    { path: 'paso1Tc', component: Paso1TcComponent },
    { path: 'paso2Tc', component: Paso2TcComponent },
    { path: 'paso3Tc', component: Paso3TcComponent },
  ],
  },
  { path: 'favoritos', component: FavoritosComponent },
  // { path: '**', component: LoginComponent, canActivate: [ AuthGuard ] }
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
