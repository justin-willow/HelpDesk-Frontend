import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent {
  newTicket: any = {};

  constructor(private ticketService: TicketService, private router: Router) {}

  createTicket(): void {
    this.ticketService.createTicket(this.newTicket).subscribe(
      (createdTicket) => {
        this.router.navigate(['/ticket-details', createdTicket.id]);
      },
      (error) => {
        console.error('Error creating ticket:', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/ticket-list']);
  }
}