import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { EventEditorComponent } from './components/event-editor/event-editor.component';
import { ShortEventCreatorComponent } from './components/short-event-creator/short-event-creator.component';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import { CalendarViewerComponent } from './components/calendar-viewer/calendar-viewer.component';
import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonthSelectorComponent,
    EventEditorComponent,
    ShortEventCreatorComponent,
    CalendarViewerComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
