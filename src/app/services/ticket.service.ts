import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  //needs an api 
  private apiUrl = '';

  constructor(private client: HttpClient) { }

  getTickets(): Observable<any[]> {
    return this.client.get<any[]>(this.apiUrl);
  }

  getTicket(id:number): Observable<any> {
    return this.client.get<any>(`${this.apiUrl}/${id}`);
  }

  createTicket(ticket: any): Observable<any> {
    return this.client.post<any>(this.apiUrl, ticket);
  }
}
