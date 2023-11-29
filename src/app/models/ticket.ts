export interface Ticket {
  id: number;
  ticketId: number;
  title: string;
  description: string;
  openedBy: string;
  resolvedBy?: string;
  createdDate: Date;
  updatedDate: Date;
  isActive: boolean;
  favorite: boolean;
}