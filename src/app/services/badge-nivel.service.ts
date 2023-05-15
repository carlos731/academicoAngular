import { HttpClient, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { BadgeNivel } from '../models/badgeNivel';

@Injectable({
  providedIn: 'root'
})
export class BadgeNivelService {

  constructor(private http: HttpClient) { }

  create(nivel: BadgeNivel): Observable<BadgeNivel>{
    return this.http.post<BadgeNivel>(`${API_CONFIG.baseUrl}/api/badge-nivel`, nivel);
  }

  findAll(): Observable<BadgeNivel[]>{
    return this.http.get<BadgeNivel[]>(`${API_CONFIG.baseUrl}/api/badge-nivel`); 
  }

  findById(id: any): Observable<BadgeNivel>{
    return this.http.get<BadgeNivel>(`${API_CONFIG.baseUrl}/api/badge-nivel/${id}`)
  }

  update(nivel: BadgeNivel): Observable<BadgeNivel>{
    return this.http.put<BadgeNivel>(`${API_CONFIG.baseUrl}/api/badge-nivel/${nivel.id}`, nivel);
  }

  delete(id: any): Observable<BadgeNivel>{
    return this.http.delete<BadgeNivel>(`${API_CONFIG.baseUrl}/api/badge-nivel/${id}`);
  }
}
