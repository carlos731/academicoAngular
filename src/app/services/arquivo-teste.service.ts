import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Arquivo } from '../models/arquivo';

@Injectable({
  providedIn: 'root'
})
export class ArquivoTesteService {

  constructor(private http: HttpClient) { }

  public upload(formData: FormData): Observable<Arquivo> {
    return this.http.post<Arquivo>(`${API_CONFIG.baseUrl}/Arquivo/upload`, formData);
  }

  public uploadMultipleFiles(formData: FormData): Observable<Arquivo> {
    return this.http.post<Arquivo>(`${API_CONFIG.baseUrl}/arquivo/uploadMultipleFiles`, formData);
  }

  create(arquivo: Arquivo): Observable<Arquivo>{
    return this.http.post<Arquivo>(`${API_CONFIG.baseUrl}/arquivo`, arquivo);
  }

  findAll(): Observable<Arquivo[]>{
    return this.http.get<Arquivo[]>(`${API_CONFIG.baseUrl}/arquivo`); 
  }

  findById(id: any): Observable<Arquivo>{
    return this.http.get<Arquivo>(`${API_CONFIG.baseUrl}/arquivo/${id}`)
  }

  update(arquivo: Arquivo): Observable<Arquivo>{
    return this.http.put<Arquivo>(`${API_CONFIG.baseUrl}/arquivo/${arquivo.id}`, arquivo);
  }

  delete(id: any): Observable<Arquivo>{
    return this.http.delete<Arquivo>(`${API_CONFIG.baseUrl}/arquivo/${id}`);
  }
}
