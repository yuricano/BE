import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  title = {};
  options = [
    { description: 'Favoritos',
    route: 'chart/'
    },
    { description: 'Resúmen',
      route: 'clients/'
    },
    { description: 'Productos',
      items: [
        {description: 'Uno', route: './one'},
        {description: 'Dos', route: './two'}
      ]
    },
    { description: 'Transferencias',
    route: 'option/'
    },
    { description: 'Pagos',
    route: 'option/'
    },
    { description: 'Nómina',
    route: 'option/'
    },
    { description: 'Buzón Fiscal',
    route: 'option/'
    }];

  public logoUrl = '/assets/img/logo.png';
  public buttonCaption = 'Ayuda';
  public logoBannerUrl = '/assets/img/logo.png';


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public helpButtonFn(e: any) {
    console.log(e);

  }

}
