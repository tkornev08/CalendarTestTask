import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {CalendarEvent} from "../../models/CalendarEvent";
import {OverlayPanel} from "primeng/overlaypanel";
import {LocalStorageService} from "../../services/local-storage.service";
import {DateService} from "../../services/date.service";

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent implements OnInit {

  @Input() overlayPanel: OverlayPanel | undefined;

  constructor(
    public eventService: EventService,
    private dateService: DateService,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {

  }

  submitForm(event: any): void {
    let value = this.eventService.eventForm.value;
    let calendarEvent: CalendarEvent = {
      title: value.title,
      description: value.description,
      participants: value.participants,
      date: value.date,
    }
    this.eventService.events.push(calendarEvent)
    this.localStorageService.setData(this.eventService.events)
    console.log('Events: ', this.eventService.events)
    this.overlayPanel!.toggle(event)
    this.dateService.changeMonth(0)
  }

  cancel(): void {

  }

}
