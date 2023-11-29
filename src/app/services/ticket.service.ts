import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Ticket } from '../ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private client: HttpClient) {}

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

  createTicket(ticket: any): Observable<any> {
    return this.client.post<any>(`${this.apiUrl}/api/ticket`, ticket);
  }

  deleteTicket(ticketId: number): Observable<any> {
    return this.client.delete<any>(`${this.apiUrl}/api/ticket/${ticketId}`);
  }

  resolveTicket(ticketId: number, ticketUpdateDto: any): Observable<any> {
    return this.client.put<any>(
      `${this.apiUrl}/api/ticket/${ticketId}`,
      ticketUpdateDto
    );
  }
}
