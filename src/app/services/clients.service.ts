import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Client } from '../models/client';

@Injectable()
export class ClientService {
  private subject = new Subject<Client>();
  private keepAfterRouteChange = false;

  constructor(private router: Router, private http: HttpClient) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
     if (event instanceof NavigationStart) {
         if (this.keepAfterRouteChange) {
             // only keep for a single route change
             this.keepAfterRouteChange = false;
         } else {
             // clear alert messages
             this.clear();
         }
     }
 });
}

  find(id: number): Observable<Client> {
    return this.http.get<Client>(`/clients/${id}`, {});
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  /**
   * @summary Consulta el universo de clientes registrados.
   * @returns <object> Retorna el set de datos correspondiente al universo de clientes encontrados.
   */
  all(): Observable<Client[]> {
    return this.http.get<Client[]>(`/clients/`, {});
  }

  /**
   * @summary Crea un nuervo registro cliente.
   * @param body <object> Representa el set de datos correspondiente a la informacion del cliente.
   * @returns <object>
   */
  add(body: Object): Observable<Client> {
    return this.http.post<Client>(`/clients/`, body);
  }

  /**
   * @summary Actualiza la informacion del cliente.
   * @param id <number> Representa el id/identificador del cliente originado en base de datos.
   * @param body <object> Representa el set de datos correspondiente a la informacion del cliente.
   * @returns <object> Retorna un modelo de datos correspondiente a la informacion del ciente.
   */
  update(id: number, body: Object): Observable<Client> {
    return this.http.put<Client>(`/clients/${id}`, body);
  }

  /**
   * @summary Elimina el cliente a traves de su ID.
   * @param id <number> Representa el id/identificador del cliente originado en base de datos.
   * @returns <object>
   */
  remove(id: number): Observable<any> {
    return this.http.delete(`/clients/${id}`, {});
  }

  save(clientes: Client[]) {
    // this.keepAfterRouteChange = keepAfterRouteChange;
    clientes.forEach(element => {
      this.subject.next(element);
    });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }

}
