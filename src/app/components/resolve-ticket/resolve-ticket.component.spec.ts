import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveTicketComponent } from './resolve-ticket.component';

describe('ResolveTicketComponent', () => {
  let component: ResolveTicketComponent;
  let fixture: ComponentFixture<ResolveTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolveTicketComponent]
    });
    fixture = TestBed.createComponent(ResolveTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
