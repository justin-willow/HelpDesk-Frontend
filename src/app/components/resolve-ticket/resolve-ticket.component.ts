import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-resolve-ticket',
  templateUrl: './resolve-ticket.component.html',
  styleUrls: ['./resolve-ticket.component.css'],
})
export class ResolveTicketComponent implements OnInit {
  ticketId!: number;
  resolvedByName: string = '';
  resolution: string = '';
  ticket: any;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ticketId = +params.get('id')!;
      this.ticketService.getTicketById(this.ticketId).subscribe((ticket) => {
        this.ticket = ticket;
      });
    });
  }

  closeTicket(): void {
    const resolvedByUser = this.resolvedByName || 'DefaultUserName';

    const ticketUpdateDto = {
      title: this.ticket.title,
      description: `${this.ticket.description} Resolution: ${this.resolution}`,
      resolvedBy: resolvedByUser,
    };

    this.ticketService
      .resolveTicket(this.ticketId, ticketUpdateDto)
      .subscribe(() => {
        this.ticketService.deleteTicket(this.ticketId).subscribe(() => {
          this.router.navigate(['/ticket-list']);
        });
      });
  }

  goBack(): void {
    this.router.navigate(['/ticket-list']);
  }
}
