import { HttpParams } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit{
    ticket:any;
    id:string | null = "";

    constructor(
      private route: ActivatedRoute,
      private ticketService: TicketService
    ) {}

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
    }
}
