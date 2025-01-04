import { Injectable } from '@angular/core';
import { Session } from './../model/session'; 
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidat } from '../model/candidat';
import { Formateur } from '../model/formateur';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseURL = "http://localhost:3000/sessions";
  private options = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  sessionsEdited = new Subject<Session[]>();

  constructor(private httpClient: HttpClient) {}

  getSessions(): Observable<Session[]> {
    return this.httpClient.get<Session[]>(this.baseURL);
  }

  addSession(startDate: string, endDate: string, formationId: string, selectedFormation: Formation | undefined, selectedFormateurs: Formateur[], selectedCandidats: Candidat[]): Observable<Session> {
    return this.httpClient.post<Session>(
      this.baseURL,
      JSON.stringify({
        startDate: startDate,
        endDate: endDate,
        formationId: formationId
      }),
      this.options
    );
  }

  getSessionById(id: string): Observable<Session> {
    return this.httpClient.get<Session>(`${this.baseURL}/${id}`);
  }

  editSession(session: Session): Observable<Session> {
    return this.httpClient.put<Session>(
      `${this.baseURL}/${session.id}`,
      JSON.stringify({
        startDate: session.dateDeb,
        endDate: session.dateFin,
        formationId: session.id
      }),
      this.options
    );
  }

  deleteSession(id: string): Observable<Session> {
    return this.httpClient.delete<Session>(`${this.baseURL}/${id}`);
  }
}
