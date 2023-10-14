import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CalendarEvent} from "../models/CalendarEvent";
import {OverlayPanel} from "primeng/overlaypanel";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: CalendarEvent[] = []
  overlayPanel: OverlayPanel | undefined

  eventForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(''),
    description: new FormControl(''),
    participants: new FormControl(''),
    date: new FormControl(''),
  })


  constructor() {
  }
}
