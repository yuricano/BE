import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'nx-controls-common';
import { ClientService } from '../../services/clients.service';
import { patternValidator } from '../../shared/validator';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.scss']
})


export class Paso1Component implements OnInit {

  correoForm: FormGroup;

  // Valores para el button y para el campo de email
  email: string;
  texto: string = "Cc";
  muestraDiv: boolean;
 
  // Entro al button
  onMouseOver(): void {
    this.texto = "Ok";
  }

  // Salió del button
  onMouseOut(): void {
    if (this.muestraDiv == true) {
      this.texto = "Ok";
    }
    else {
      this.texto = "Cc";
    }
  }

  // Clic al button y abre el dialog de material
  openDialog(): void {
    this.texto = "Ok";
    this.muestra();
    //this.email = null;
  }

  // Muestra / Oculta
  muestra() {
    this.muestraDiv = true;
  }

  oculta() {
    this.muestraDiv = false;
  }
  
  constructor(
    private alertService: AlertService,
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) { }

   // Teclas Enter y Esc presionadas
  @HostListener('document:keydown', ['$event'])

  public handleKeyboardEvent(event: KeyboardEvent): void {

    event.stopPropagation();

    switch (event.keyCode.toString()) {
      // Enter
      case "13": {
        if (this.muestraDiv == true) {
          this.muestra();
          if (this.correoForm.invalid == true) {
            alert('Correo invalido');
          }
          else {
            alert('OK - ' + this.email);
            this.oculta();
            this.texto = "Cc";
          }
        }
        break;
      }

      // ESC
      case "27": {
        if (this.muestraDiv == true) {
          this.oculta();
          this.texto = "Cc";
        }
        break;
      }

      default: {
        break;
      }
    }
  }

  ngOnInit() {
    this.correoForm = this.formBuilder.group({
      correo: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
  }
}


