import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit{
    ticket:any;
    id:string | null = "";

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private ticketService: TicketService
    ) {}

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
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
