import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = {};
  options = [
    { description: 'Favoritos',
    route: '/favoritos'
    },
    { description: 'Resúmen',
      route: 'option/'
    },
    { description: 'Productos',
      route: 'option/'
    },
    { description: 'Transferencias',
    route: 'option/'
    },
    { description: 'Pagos',
      route: './pagos'
    },
    { description: 'Nómina',
    route: 'option/'
    },
    { description
    : 'Buzón Fiscal',
    route: 'option/'
    },
    { description: 'Cartas Crédito',
    route: 'option/'
    },
    { description: 'Reportes',
    route: 'option/'
    },
    { description: 'Administración',
      items: [
        {description: 'Uno', route: './one'},
        {description: 'Dos', route: './two'}
      ]
    },
  ];

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
