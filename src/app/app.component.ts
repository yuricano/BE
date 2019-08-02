import { Component, OnInit } from '@angular/core';

import { AuthService } from 'nx-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  leftContent = [
    { content: 'Favoritos', isTitle: true },
    { content: 'Reportes', isTitle: false},
    { content: 'Expediente', isTitle: false},
    { content: 'Catalogo', isTitle: false},
    { content: 'Cotizador', isTitle: false}
  ];

  mainContent = [
    { isHeader: false,
      content: [
        { content: 'Clientes', isTitle: true },
        { content: 'CRM', isTitle: false },
        { content: 'Prospectos', isTitle: false },
        { content: 'ADN', isTitle: false },
        { content: 'Calificacion', isTitle: false }
      ]
    },
    { isHeader: false,
      content: [
        { content: 'Lorem', isTitle: true },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false }
      ]
    },
    { isHeader: false,
      content: [
        { content: 'Lorem', isTitle: true },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false }
      ]
    }
  ];

  /**
   * isAuthenticated. Validamos la authenticacion del usuario para mostrar el Menu principal.
   */
  isAuthenticated: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.isAuthenticated = this.authService.IsAuth();
  }
}
