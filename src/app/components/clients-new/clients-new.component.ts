import { Component, OnInit, Input } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'nx-controls-common';

import { ClientService } from '../../services/clients.service';

import { patternValidator } from '../../shared/validator';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.scss']
})
export class ClientsNewComponent implements OnInit {
  clientsForm: FormGroup;
  tableConfig = {
    header: {
      id: '#',
      tipoPersona: 'Tipo Persona',
      origen: 'Importado',
      venta: '% de Ventas'
    }
  };

  constructor(
    private alertService: AlertService,
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    /**
     * RegEx validations.
     *
     * Requires a decimal and commas
     * ^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$
     *
     * Decimal and commas optional
     * (?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$
     *
     * Phone Number
     * ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
     *
     * Email
     * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     *
     */
    this.clientsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      age: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressBo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });
  }



  onSubmit({value}) {
    let body = <any>{};
    body.client = <any>{};

    body.client.name = value.name;
    body.client.last_name = value.lastName;
    body.client.age = value.age;
    body.client.telephone = value.phoneNumber;
    body.client.address = value.address;
    body.client.address_b = value.addressBo;
    body.client.city = value.city;
    body.client.state = value.state;
    body.client.zip = value.zip;

    this.clientService.add(body)
    .subscribe((response) => {
      this.clientsForm.reset();
      this.alertService.success('La informacion del cliente se guardo satisfactoriamente.');
    }, (error) => {
      this.alertService.error('No hemos podido guardar la informacion del cliente.' + error.status);
    });
  }

}
