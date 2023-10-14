import {Component, OnInit, ViewChild} from '@angular/core';
import {DateService} from "../../services/date.service";
import * as moment from "moment";
import {Week} from "../../models/Week";
import {OverlayPanel} from "primeng/overlaypanel";
import {EventService} from "../../services/event.service";
import {CalendarEvent} from "../../models/CalendarEvent";
import {LocalStorageService} from "../../services/local-storage.service";
import {Day} from "../../models/Day";

@Component({
  selector: 'app-calendar-viewer',
  templateUrl: './calendar-viewer.component.html',
  styleUrls: ['./calendar-viewer.component.css']
})
export class CalendarViewerComponent implements OnInit {
  @ViewChild('overlayPanel') overlayPanel: OverlayPanel | undefined;
  calendar: Week[] = [];

  constructor(
    private dateService: DateService,
    public eventService: EventService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.eventService.events = this.localStorage.getData()
    this.eventService.events.forEach(e => {
      console.log(e.date)
    })
    console.log('Events from local storage: ', this.eventService.events)
    this.dateService.date.subscribe(this.generate.bind(this))
    this.eventService.overlayPanel = this.overlayPanel
  }

  generate(now: moment.Moment) {
    let events = this.localStorage.getData();
    const startDay = now.clone().startOf('month').startOf('week')
    const endDay = now.clone().endOf('month').endOf('week')

    const date = startDay.clone().subtract(1, 'day')

    const calendar = []

    while (date.isBefore(endDay, 'day')) {
      calendar.push(this.getWeek(date, now, events))
    }

    this.calendar = calendar
  }

  private getWeek(date: moment.Moment, now: moment.Moment, events: CalendarEvent[]){
    return {
      days: Array(7)
        .fill(0)
        .map(() => {
          const value = date.add(1, 'day').clone()
          console.log('build calendar...', value.toDate())
          const active = moment().isSame(value, 'date')
          const disabled = !now.isSame(value, 'month')
          const selected = now.isSame(value, 'date')
          let targetDate = new Date(value.toDate().toString())
          const event = events.find(e => {
            const eventDate: Date = new Date(e.date!.toString())
            return targetDate.getFullYear() === eventDate.getFullYear() && targetDate.getMonth() === eventDate.getMonth() && targetDate.getDate() === eventDate.getDate()
          });

          return {
            value, active, disabled, selected, event
          }
        })
    };
  }


  openOverlayPanelWithData(day: Day, event: any) {
    console.log('openOverlayPanelWithData', day.value.toDate())
    if (day.event) {
      this.eventService.eventForm.patchValue({
        title: day.event.title,
        date: day.value.toDate(),
        description: day.event.description,
        participants: day.event.participants
      })
    } else {
      this.eventService.eventForm.patchValue({
      })
    }
    this.overlayPanel!.toggle(event); // Откройте p-overlayPanel
  }
}
