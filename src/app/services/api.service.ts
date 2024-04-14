import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Media, MediaElement } from '../models/media.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendURI= 'http://localhost:3000/'

  constructor( public http:HttpClient) { }

  getMedia():Observable<MediaElement[]>{
   return this.http.get<MediaElement[]>(`${this.backendURI}media`)
  }

  deleteData(id: string): Observable<boolean> {
    return this.http.delete(`${this.backendURI}media/${id}`, { observe: 'response' })
      .pipe(
        map(response => response.status === 200 || response.status === 204),
        catchError(error => {
          console.error('Error al eliminar el dato', error);
          return of(false);
        })
      );
  }

  getMediaById(id: string): Observable<MediaElement> {
    return this.http.get<MediaElement>(`${this.backendURI}media/${id}`);
  }


}

