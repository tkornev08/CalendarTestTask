import {Component, ViewChild} from '@angular/core';
import {DateService} from "../../services/date.service";
import {CalendarEvent} from "../../models/CalendarEvent";
import {v4 as uuidv4} from "uuid";
import {EventService} from "../../services/event.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent {
  @ViewChild('op') overlayPanel: OverlayPanel | undefined;
  eventString: string = '';

  constructor(
    public dateService: DateService,
    private eventService: EventService,
    private localStorageService: LocalStorageService
  ) {
  }

  changeMonthWithStep(dir: number) {
    this.dateService.changeMonth(dir)
  }

  createEvent() {
    let event = this.parseEventString(this.eventString);
    if (event) {
      this.eventService.events.push(event)
      this.localStorageService.setData(this.eventService.events)
      this.overlayPanel!.toggle(event)
      this.dateService.changeMonth(0)
    }

  }

  parseEventString(eventString: string): CalendarEvent | null {
    const parts = eventString.split(' ');

    if (parts.length < 2) {
      console.error('Неверный формат строки события');
      return null;
    }

    const datePart = parts[0];
    const eventTitlePart = parts.slice(1).join(' ');

    const dateParts = datePart.split('.');
    if (dateParts.length !== 3) {
      console.error('Неверный формат даты');
      return null;
    }

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);

    const date = new Date(year, month, day);

    if (isNaN(date.getTime())) {
      console.error('Неверная дата');
      return null;
    }
    return {
      id: uuidv4(),
      date,
      title: eventTitlePart,
    };
  }
}
