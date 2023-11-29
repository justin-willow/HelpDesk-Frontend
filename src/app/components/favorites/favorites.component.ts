import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
    favoriteTickets: any[] = [];

    constructor(private ticketService: TicketService) {}

    ngOnInit(): void {
      this.favoriteTickets = this.ticketService.getFavoriteTickets();
    }
}
