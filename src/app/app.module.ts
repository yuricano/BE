import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FrameworkModule } from 'nx-core';
import { CommonsModule } from 'nx-controls-common';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsNewComponent } from './components/clients-new/clients-new.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';

import { ClientService } from './services/clients.service';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

import { LoginComponent } from './components/login/login.component';

import { LoadingService } from 'nx-core';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { WeatherService } from './services/weather.service';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { MatInputModule } from '@angular/material/input';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatDialogModule } from "@angular/material";

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
import { TablaComponent } from './components/tabla/tabla.component';

// Otros
import { SelectmComponent } from './components/selectm/selectm.component';
import { SelectEditableComponent } from 'nx-controls-common';

import {
  MatButtonToggleModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


/**
 * El objecto config es requerido para determinar los parametros globales de la aplicacion.
 *
 * usernameLabel. La descripcion del username box en el login
 * endpoint. El endpoint de conexion para el Framework Module.
 * application. Identificador de la aplicacion. Requerido por el backend.
 * applicationTitle. La descripcion de la aplicacion. Aparece como titulo.
 */

const config = {
  usernameLabel: 'BRM',
  endpoint: '/api',
  application: 'GENESIS',
  applicationTitle: 'Project Genesis'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AnalyticsComponent,
    SolicitudComponent,
    MainComponent,
    FavoritosComponent,
    PagosComponent,
    RecurrentesComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    ServiciosComponent,
    TarjetasComponent,
    CreditosComponent,
    SelectmComponent,
    Paso1TcComponent,
    Paso2TcComponent,
    Paso3TcComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FrameworkModule.forRoot(config),
    CommonsModule.forRoot(),
    FormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatMomentDateModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [ClientService, WeatherService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
