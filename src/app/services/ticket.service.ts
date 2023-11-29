import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private client: HttpClient) {}
  
  apiUrl:string ='';

  getTickets(): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(`${this.apiUrl}/tickets`);
  }

  getTicketsById(id: number): Observable<Ticket> {
    return this.client.get<Ticket>(`${this.apiUrl}/tickets/${id}`);
  }

  getFavoriteTickets(): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(`${this.apiUrl}/tickets/favorites`);
  }

  toggleFavorite(id:number): Observable<any> {
    return this.client.patch(`${this.apiUrl}/tickets/${id}/toggle-favorites`, null);
  }
}
