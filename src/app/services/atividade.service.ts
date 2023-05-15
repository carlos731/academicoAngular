import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Atividade } from '../models/atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private http: HttpClient) { }

  create(atividade: Atividade): Observable<Atividade>{
    return this.http.post<Atividade>(`${API_CONFIG.baseUrl}/api/atividade`, atividade);
  }

  findAll(): Observable<Atividade[]>{
    return this.http.get<Atividade[]>(`${API_CONFIG.baseUrl}/api/atividade`); 
  }

  findById(id: any): Observable<Atividade>{
    return this.http.get<Atividade>(`${API_CONFIG.baseUrl}/api/atividade/${id}`)
  }

  update(atividade: Atividade): Observable<Atividade>{
    return this.http.put<Atividade>(`${API_CONFIG.baseUrl}/api/atividade/${atividade.id}`, atividade);
  }

  delete(id: any): Observable<Atividade>{
    return this.http.delete<Atividade>(`${API_CONFIG.baseUrl}/api/atividade/${id}`);
  }

}
