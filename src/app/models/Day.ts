import * as moment from "moment";
import {CalendarEvent} from "./CalendarEvent";

export interface Day {
  value: moment.Moment
  active?: boolean
  disabled?: boolean
  selected?: boolean
  event?: CalendarEvent
}
