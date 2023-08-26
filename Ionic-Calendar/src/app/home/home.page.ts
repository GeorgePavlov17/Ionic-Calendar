import { Component, ViewChild } from '@angular/core';
import { CalendarComponent, CalendarMode } from 'ionic6-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
  };

  public viewTitle = '';
  public eventSource: any[] = [];

  @ViewChild(CalendarComponent) myCal!: CalendarComponent;

  constructor() {}

  setToday() {
    this.myCal.currentDate = new Date();
    this.myCal.update();
  }

  calendarBack() {
    this.myCal.slidePrev();
  }

  calendarForward() {
    this.myCal.slideNext();
  }

}
