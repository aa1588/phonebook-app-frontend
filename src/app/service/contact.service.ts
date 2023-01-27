import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL = "http://localhost:8081/api/contacts";

  constructor(private http: HttpClient) { }

  getContactList(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.baseURL}`)
  }

  createContact(contact:Contact): Observable<Object>{
    return this.http.post(`${this.baseURL}`, contact)
  }

  getContactById(id:number): Observable<Contact>{
    return this.http.get<Contact>(`${this.baseURL}/${id}`)
  }
  updateContact( contact:Contact){
    return this.http.put(`${this.baseURL}`, contact)
  }

  deleteContact(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}


