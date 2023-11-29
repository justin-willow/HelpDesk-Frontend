import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  ticket: any;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.ticketService.getTicketsById(this.id).subscribe((ticket) => {
          this.ticket = ticket;
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/ticket-list']);
  }

  goToResolveTicket(): void {
    if (this.ticket) {
      this.router.navigate(['/resolve-ticket', this.ticket.id]);
    } else {
      console.error('Ticket is undefined. Cannot navigate to resolve-ticket.');
    }
  }
}