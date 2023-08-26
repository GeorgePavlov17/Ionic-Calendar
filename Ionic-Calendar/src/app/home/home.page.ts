import { Component, ViewChild, OnInit } from '@angular/core';
import { IonModal, IonRouterOutlet } from '@ionic/angular';
import { format, parseISO, toDate } from 'date-fns';
import { CalendarComponent, CalendarMode } from 'ionic6-calendar';
import { CalEvent, EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
  @ViewChild('modal') modal!: IonModal;

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
  };

  newEvent = {
    title: '',
    allDay: false,
    startTime: '',
    endTime: ''
  };

  public showStart: boolean = false;
  public showEnd: boolean = false;
  public formattedStart = '';
  public formattedEnd = '';
  public viewTitle = '';
  public eventSource: any[] = [];
  public presentingtElement: any = null;

  constructor(
    private ionRouterOutlet: IonRouterOutlet, 
    private eventsService: EventsService
    ) 
    {
    this.presentingtElement = ionRouterOutlet.nativeEl;
  }

  async ngOnInit() {
    this.eventSource = await this.eventsService.getData();
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

  onTimeSelected(ev: {selectedTime: Date; events: any[]}) {
    this.formattedStart = format(ev.selectedTime, 'HH:mm, MMM d, yyyy');
    this.newEvent.startTime = format(ev.selectedTime, "yyyy-MM-dd'T'HH:mm:ss");

    const later = ev.selectedTime.setHours(ev.selectedTime.getHours() + 1);
    this.formattedEnd = format(later, 'HH:mm, MMM d, yyyy');
    this.newEvent.endTime = format(later, "yyyy-MM-dd'T'HH:mm:ss");

    if(this.calendar.mode === 'day' || this.calendar.mode === 'week') {
      this.modal.present();
    }
  }

  startChanged(value: any) {
    this.newEvent.startTime = value;
    this.formattedStart = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }

  endChanged(value: any) {
    this.newEvent.endTime = value;
    this.formattedEnd = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }

  scheduleEvent() {
    const toAdd: CalEvent = {
      title: this.newEvent.title,
      startTime: new Date(this.newEvent.startTime),
      endTime:  new Date(this.newEvent.endTime),
      allDay: this.newEvent.allDay
    };
    
    this.eventSource.push(toAdd);
    this.myCal.loadEvents();
    this.eventsService.addData(toAdd);

    this.newEvent = {
      title: '',
      allDay: false,
      startTime: '',
      endTime: '',
    };

    this.modal.dismiss();
  }
}
