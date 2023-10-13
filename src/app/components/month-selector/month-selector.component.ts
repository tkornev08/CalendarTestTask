import {Component} from '@angular/core';
import {DateService} from "../../services/date.service";

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent {
  calendarEventValue: any;

  constructor(
    public dateService: DateService
  ) {
  }

  changeMonthWithStep(dir: number) {
    this.dateService.changeMonth(dir)
  }

}
