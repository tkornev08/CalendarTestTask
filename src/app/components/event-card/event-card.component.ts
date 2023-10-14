import {Component, Input} from '@angular/core';
import {CalendarEvent} from "../../models/CalendarEvent";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  @Input() calendarEvent: CalendarEvent | undefined

}
