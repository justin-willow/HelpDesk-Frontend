import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    favoriteTickets: Ticket[] = [];

    constructor(private ticketService: TicketService) {}

    ngOnInit(): void {
      this.ticketService.getFavoriteTickets().subscribe(
        (tickets: Ticket[]) => {
          this.favoriteTickets = tickets;
        }
      );
    }
}