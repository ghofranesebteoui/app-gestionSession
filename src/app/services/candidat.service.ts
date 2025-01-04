import { Injectable } from '@angular/core';
import { Candidat } from './../model/candidat'
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private baseURL = "http://localhost:3000/candidats";
  private options = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  candidatsEdited = new Subject<Candidat[]>();

  constructor(private httpClient: HttpClient) {}

  getCandidats(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(this.baseURL);
  }

  addCandidat(firstName: string, lastName: string, email: string, password: string, _photo: any, _mdp: any): Observable<Candidat> {
    return this.httpClient.post<Candidat>(
      this.baseURL,
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }),
      this.options
    );
  }

  getCandidatById(id: string): Observable<Candidat> {
    return this.httpClient.get<Candidat>(`${this.baseURL}/${id}`);
  }

  editCandidat(candidat: Candidat): Observable<Candidat> {
    return this.httpClient.put<Candidat>(
      `${this.baseURL}/${candidat.id}`,
      JSON.stringify({
        firstName: candidat.nom,
        lastName: candidat.prenom,
        email: candidat.email,
        password: candidat.mdp
      }),
      this.options
    );
  }

  deleteCandidat(id: string): Observable<Candidat> {
    return this.httpClient.delete<Candidat>(`${this.baseURL}/${id}`);
  }
}
