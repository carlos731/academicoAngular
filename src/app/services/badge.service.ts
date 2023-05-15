import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Badge } from '../models/badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private http: HttpClient) { }

  public upload(formData: FormData): Observable<Badge> {
    return this.http.post<Badge>(`${API_CONFIG.baseUrl}/api/badge/upload`, formData);
  }

  create(badge: Badge): Observable<Badge>{
    return this.http.post<Badge>(`${API_CONFIG.baseUrl}/api/badge`, badge);
  }

  findAll(): Observable<Badge[]>{
    return this.http.get<Badge[]>(`${API_CONFIG.baseUrl}/api/badge`); 
  }

  findById(id: any): Observable<Badge>{
    return this.http.get<Badge>(`${API_CONFIG.baseUrl}/api/badge/${id}`)
  }

  update(badge: Badge): Observable<Badge>{
    return this.http.put<Badge>(`${API_CONFIG.baseUrl}/api/badge/${badge.id}`, badge);
  }

  delete(id: any): Observable<Badge>{
    return this.http.delete<Badge>(`${API_CONFIG.baseUrl}/api/badge/${id}`);
  }

  public uploadForm(descricao: string, img: File, badgeNivelId?: any): FormData {
    const formData = new FormData();
    formData.append('descricao', descricao);
    formData.append('img', img);
    formData.append('badgeNivelId', badgeNivelId);
    return formData;
  }
  
}
