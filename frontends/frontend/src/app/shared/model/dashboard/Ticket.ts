export interface CreateTicket {
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    createDate: Date,
    deadLine: boolean
    type: string,
    label: string,
    classification: string,
    projectLabel: string,
}

export interface Ticket {
    id?: number;
    projectId: string,
    projectLabel: string,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    createDate: Date,
    deadLine: boolean,
    type: string,
    label: string,
    classification: string,
    status: string
}

export interface TicketDropDown {
    value: string;
    viewValue: string;
}

export interface CreateTicketContent {
    ticketTypes: TicketDropDown[],
    ticketLabel: TicketDropDown[],
    ticketPrios: TicketDropDown[],
}

export interface TicketTableElement {
    position: number;
    id: number;
    projectId: string;
    projectLabel: string;
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    createDate: Date,
    deadLine: boolean,
    type: string,
    label: string,
    classification: string,
    status: string
}

export interface TicketStatusDropDown {
    label: string;
    code: string;
}