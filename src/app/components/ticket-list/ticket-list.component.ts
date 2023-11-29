import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: any[] = [];
  filteredTickets: any[] = [];
  showFavorites: boolean = false;
  userId: number = 0;

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    this.filteredTickets = this.showFavorites
      ? this.tickets.filter((ticket) => ticket.isFavorite)
      : this.tickets;
  }
}
