import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private API_FIRE = "https://evaluacion-ea26a-default-rtdb.firebaseio.com/tareas";

  constructor(private http: HttpClient) { }


  posttarea(tarea: any): Observable<any> {
    return this.http.post(`${this.API_FIRE}.json`, tarea);
  }

  gettareas(): Observable<any> {
    return this.http.get(`${this.API_FIRE}.json`);
  }

  puttarea(id: string, tarea: any): Observable<any> {
    return this.http.patch(`${this.API_FIRE}/${id}.json`, tarea);
  }

  deletetarea(id: string): Observable<any> {
    return this.http.delete(`${this.API_FIRE}/${id}.json`);
  }
}