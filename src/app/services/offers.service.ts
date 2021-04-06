import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('/assets/data/ofertas.json');
  }

  getById(id) {
    return this.http.get('/assets/data/ofertas.json')
    .pipe(map((resp: any[]) => resp.find(el => el.versions[0].id === id)))
    .pipe(map(resp => resp === null ? {}: resp));
  }


}
