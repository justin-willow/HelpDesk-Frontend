import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { ResolveTicketComponent } from './components/resolve-ticket/resolve-ticket.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/ticket-list', pathMatch: 'full' },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-details/:id', component: TicketDetailsComponent },
  { path: 'resolve-ticket/:id', component: ResolveTicketComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
