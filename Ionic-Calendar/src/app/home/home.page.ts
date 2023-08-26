import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { CalendarComponent, CalendarMode } from 'ionic6-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(CalendarComponent) myCal!: CalendarComponent;

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
  };

  newEvent = {
    title: '',
    allDay: false,
    startTime: null,
    endTime: null
  };

  public viewTitle = '';
  public eventSource: any[] = [];
  public presentingtElement: any = null;

  constructor(private ionRouterOutlet: IonRouterOutlet) {
    this.presentingtElement = ionRouterOutlet.nativeEl;
  }

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

  scheduleEvent() {

  }

}
