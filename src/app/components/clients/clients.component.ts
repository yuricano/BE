import { Component, OnInit, Input } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'nx-controls-common';

import { ClientService } from '../../services/clients.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  tableRows = [];
  tableConfig = {
    header: {
      id: '#',
      name: 'Nombre',
      email: 'Email',
      age: 'Edad',
      phoneNumber: 'Tel'
    }
  };

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  clientes: Client[];

  constructor(
    private alertService: AlertService,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getData().subscribe((registry) => {
      if (!registry) {
          // clear clients when an empty client is received
          this.tableRows = [];
          return;
      }
      // add client to array
      this.tableRows.push(registry);
    });

    this.getClients();
  }

  private getClients() {
    this.clientService.all().map(response => {
      console.log(response);
    });

    this.clientService.all()
    .subscribe(response => {
        console.log('Getting clients...');
        console.log(response);

        // const data = <Client[]>response.data;

        // this.clientService.save(data);
    }, (error) => {
      this.alertService.error('Parece que tenemos un problema D:' + error.status);
    });
  }


  private removeClient(id: number) {
    this.clientService.remove(id).subscribe((response) => {
      this.alertService.info('El cliente se elimino correctamente.');
      this.tableRows.forEach((item, index) => {
        if (item.id === id) {
          this.tableRows.splice(index, 1);
        }
      });
    },
    (error) => {
      this.alertService.error('Error: ' + error.status);
    });
  }

}
