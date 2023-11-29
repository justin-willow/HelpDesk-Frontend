import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private client: HttpClient) {}

  getTickets(): Observable<any[]> {
    return this.client.get<any[]>(`${this.apiUrl}/api/ticket`);
  }

  getTicketById(id: number): Observable<any> {
    return this.client.get<any>(`${this.apiUrl}/api/ticket/${id}`);
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

  addFavorite(id: number): Observable<any> {
    return this.client.post<any>(`${this.apiUrl}/api/favorites`, { id });
  }

  deleteFavorite(id: number): Observable<any> {
    return this.client.delete<any>(`${this.apiUrl}/api/favorites/${id}`);
  }

  getFavoritesByUserId(id: number): Observable<any[]> {
    return this.client.get<any[]>(`${this.apiUrl}/api/favorites/${id}`);
  }
}
