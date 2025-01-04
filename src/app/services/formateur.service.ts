import { Injectable } from '@angular/core';
import { Formateur } from './../model/formateur';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseURL = "http://localhost:3000/formateurs";
  private options = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  formateursEdited = new Subject<Formateur[]>();

  constructor(private httpClient: HttpClient) {}

  getFormateurs(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(this.baseURL);
  }

  addFormateur(firstName: string, lastName: string, email: string, phone: string): Observable<Formateur> {
    return this.httpClient.post<Formateur>(
      this.baseURL,
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      }),
      this.options
    );
  }

  getFormateurById(id: string): Observable<Formateur> {
    return this.httpClient.get<Formateur>(`${this.baseURL}/${id}`);
  }

  editFormateur(formateur: Formateur): Observable<Formateur> {
    return this.httpClient.put<Formateur>(
      `${this.baseURL}/${formateur.id}`,
      JSON.stringify({
        firstName: formateur.nom,
        lastName: formateur.prenom,
        email: formateur.email,
        phone: formateur.tel
      }),
      this.options
    );
  }

  deleteFormateur(id: string): Observable<Formateur> {
    return this.httpClient.delete<Formateur>(`${this.baseURL}/${id}`);
  }
}
