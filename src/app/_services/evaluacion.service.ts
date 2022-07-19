import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluacion } from '../_models/evaluacion.model';


@Injectable({ 
  providedIn: 'root'
})
export class EvaluacionService {

  private baseUrl = 'http://localhost:9090/api/evaluaciones/';
  private baseUrldos = 'http://localhost:9090/api/evaluaciones/evaluacion';

  constructor(private http: HttpClient) { }
 
  // public getAllTutoriales():Observable<any>{
  //   return this.http.get(this.API_URL);
  // }     

  getAll(): Observable<Evaluacion[]> {
    return this.http.get<Evaluacion[]>(this.baseUrl);
  }

  get(id: any): Observable<Evaluacion> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

//   findByNombre(nombre: any): Observable<Evaluacion[]> {
//     return this.http.get<Evaluacion[]>(`${this.baseUrl}?nombre=${nombre}`);
//   }

  findByIddd(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrldos}/${id}`);
  }


}

