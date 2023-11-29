import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  constructor(private ticketService: TicketService) {}

  tickets:Ticket[] = [];

  ngOnInit(){
    this.ticketService.getTickets()
      .subscribe((tickets: any[]) => this.tickets = tickets);
  }

}
