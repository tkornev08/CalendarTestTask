import {Injectable} from '@angular/core';
import {CalendarEvent} from "../models/CalendarEvent";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  EVENTS_KEY = 'EVENTS_KEY'

  constructor() {
  }


  public setData(events: CalendarEvent[]) {
    const data = JSON.stringify(events)
    window.localStorage.setItem(this.EVENTS_KEY, data)
  }


  public getData(): CalendarEvent[] {
    const data = localStorage.getItem(this.EVENTS_KEY);
    if (data) {
      return <CalendarEvent[]>JSON.parse(data)
    }
    return []
  }

}
