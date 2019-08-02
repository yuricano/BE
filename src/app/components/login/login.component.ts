import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  step = 1;
  userNameLabel = 'L******* D*****';

  constructor(private route: Router) {}

  public config = {
    stepOne: {
      inputLabel: 'Escribe tu usuario',
      inputMinChars: 8,
      inputMaxChars: 10
    },
    stepTwo: {
      inputLabel: 'Escribe tu contraseña',
      inputMinChars: 8,
      inputMaxChars: 10
    },
    stepThree: {
      inputLabel: 'Escribe tu token',
      inputMinChars: 8,
      inputMaxChars: 10
    }
  };

  ngOnInit() {}

  private nextFn(e: any) {
    console.log(e);
    this.step = this.step + 1;
  }

  private helpFn(e: any) {
    console.log(e);
  }

  private submitFn(e: any) {
    console.log(e);
    this.route.navigateByUrl('/solicitud');
  }
}
