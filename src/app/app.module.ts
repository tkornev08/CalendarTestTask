import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { EventEditorComponent } from './components/event-editor/event-editor.component';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import { CalendarViewerComponent } from './components/calendar-viewer/calendar-viewer.component';
import { MomentPipe } from './pipes/moment.pipe';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {InputMaskModule} from "primeng/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {StyleClassModule} from "primeng/styleclass";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthSelectorComponent,
    EventEditorComponent,
    CalendarViewerComponent,
    MomentPipe,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    TableModule,
    OverlayPanelModule,
    InputMaskModule,
    FormsModule,
    ChipsModule,
    StyleClassModule,
    InputTextareaModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
