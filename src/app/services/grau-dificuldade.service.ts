import { HttpClient, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { GrauDificuldade } from '../models/grauDificuldade';

@Injectable({
  providedIn: 'root'
})
export class GrauDificuldadeService {

  constructor(private http: HttpClient) { }

  create(grauDificuldade: GrauDificuldade): Observable<GrauDificuldade>{
    return this.http.post<GrauDificuldade>(`${API_CONFIG.baseUrl}/api/grauDificuldade`, grauDificuldade);
  }

  findAll(): Observable<GrauDificuldade[]>{
    return this.http.get<GrauDificuldade[]>(`${API_CONFIG.baseUrl}/api/grauDificuldade`); 
  }

  findById(id: any): Observable<GrauDificuldade>{
    return this.http.get<GrauDificuldade>(`${API_CONFIG.baseUrl}/api/grauDificuldade/${id}`)
  }

  update(grauDificuldade: GrauDificuldade): Observable<GrauDificuldade>{
    return this.http.put<GrauDificuldade>(`${API_CONFIG.baseUrl}/api/grauDificuldade/${grauDificuldade.id}`, grauDificuldade);
  }

  delete(id: any): Observable<GrauDificuldade>{
    return this.http.delete<GrauDificuldade>(`${API_CONFIG.baseUrl}/api/grauDificuldade/${id}`);
  }
}
