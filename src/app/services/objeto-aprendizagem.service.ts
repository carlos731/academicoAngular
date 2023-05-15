import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { ObjetoAprendizagem } from '../models/objetoAprendizagem';

@Injectable({
  providedIn: 'root'
})
export class ObjetoAprendizagemService {

  constructor(private http: HttpClient) { }

  public upload(formData: FormData): Observable<ObjetoAprendizagem> {
    return this.http.post<ObjetoAprendizagem>(`${API_CONFIG.baseUrl}/api/objetoAprendizagem/upload`, formData);
  }

  create(objetoAprendizagem: ObjetoAprendizagem): Observable<ObjetoAprendizagem>{
    return this.http.post<ObjetoAprendizagem>(`${API_CONFIG.baseUrl}/api/objetoAprendizagem`, objetoAprendizagem);
  }

  findAll(): Observable<ObjetoAprendizagem[]>{
    return this.http.get<ObjetoAprendizagem[]>(`${API_CONFIG.baseUrl}/api/objetoAprendizagem`); 
  }

  findById(id: any): Observable<ObjetoAprendizagem>{
    return this.http.get<ObjetoAprendizagem>(`${API_CONFIG.baseUrl}/api/objetoAprendizagem/${id}`)
  }

  update(objetoAprendizagem: ObjetoAprendizagem): Observable<ObjetoAprendizagem>{
    return this.http.put<ObjetoAprendizagem>(`${API_CONFIG.baseUrl}/api/objetoAprendizagem/${objetoAprendizagem.id}`, objetoAprendizagem);
  }

  delete(id: any): Observable<ObjetoAprendizagem>{
    return this.http.delete<ObjetoAprendizagem>(`${API_CONFIG.baseUrl}/api/objetoAprendizagem/${id}`);
  }

  public uploadForm(descricao: string, img: File, badgeNivelId?: any): FormData {
    const formData = new FormData();
    formData.append('descricao', descricao);
    formData.append('img', img);
    formData.append('badgeNivelId', badgeNivelId);
    return formData;
  }
  
}
