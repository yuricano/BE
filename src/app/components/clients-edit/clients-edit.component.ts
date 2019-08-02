import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'nx-controls-common';

import { ClientService } from '../../services/clients.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.scss']
})
export class ClientsEditComponent implements OnInit {
  clientsForm: FormGroup;
  tableRows = [];
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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.clientService.getData().subscribe((registry) => {
      if (!registry) {
          // clear alerts when an empty alert is received
          this.tableRows = [];
          return;
      }
      // add alert to array
      this.tableRows.push(registry);
    });

    this.clientsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressBo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      messages: this.formBuilder.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]]
      })
      });

      this.getClient();
  }


  onSubmit({value}) {
    let id = this.route.params['value'].id;
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

    this.clientService.update(id, body)
    .subscribe((c) => {
      this.clientsForm.patchValue({
        name: c.name.toString(),
        lastName: c.last_name.toString(),
        age: c.age.toString(),
        phoneNumber: c.telephone.toString(),
        address: c.address.toString(),
        addressBo: c.address_b.toString(),
        city: c.city.toString(),
        state: c.state.toString(),
        zip: c.zip.toString()
      });

      this.alertService.success('La informacion del cliente se actualizo satisfactoriamente.');
    }, (error) => {
      this.alertService.error('No hemos podido actualizar la informacion del cliente.' + error.status);
    });
  }


  private getClient() {
    let id = this.route.params['value'].id;

    this.clientService.find(id)
    .subscribe(c => {


      console.log(c);
      console.log(c.age2);


      this.clientsForm.patchValue({
        name: c.name.toString(),
        lastName: c.last_name.toString(),
        age: c.age2,
        phoneNumber: c.telephone.toString(),
        address: c.address.toString(),
        addressBo: c.address_d,
        city: c.city.toString(),
        state: c.state.toString(),
        zip: c.zip.toString()
      });
    }, (error) => {
      this.alertService.error('A ocurrido un problema. ' + error.status);
    });
  }
}
