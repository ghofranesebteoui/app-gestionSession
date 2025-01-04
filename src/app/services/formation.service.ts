import { Injectable } from '@angular/core';
import { Formation } from './../model/formation';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  getCategories() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:3000/formations";
  private options = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  formationsEdited = new Subject<Formation[]>();

  constructor(private httpClient: HttpClient) {}

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.baseURL);
  }

  addFormation(title: string, description: string, duration: number, difficulty: string, _nivDifficulte: any, p0: any, p1: any): Observable<Formation> {
    return this.httpClient.post<Formation>(
      this.baseURL,
      JSON.stringify({
        title: title,
        description: description,
        duration: duration,
        difficulty: difficulty
      }),
      this.options
    );
  }

  getFormationById(id: string): Observable<Formation> {
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`);
  }

  editFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.put<Formation>(
      `${this.baseURL}/${formation.id}`,
      JSON.stringify({
        title: formation.titre,
        description: formation.desc,
        duration: formation.chargeHoraire,
        difficulty: formation.nivDifficulte
      }),
      this.options
    );
  }

  deleteFormation(id: string): Observable<Formation> {
    return this.httpClient.delete<Formation>(`${this.baseURL}/${id}`);
  }
}
