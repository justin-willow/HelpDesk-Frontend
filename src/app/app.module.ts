import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ResolveTicketComponent } from './components/resolve-ticket/resolve-ticket.component';import { FavoritesComponent } from './components/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailsComponent,
    CreateTicketComponent,
    ResolveTicketComponent,
    FavoritesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
