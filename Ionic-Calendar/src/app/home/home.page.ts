import { Component } from '@angular/core';
import { CalendarMode } from 'ionic6-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  calendar = {
    mode: 'month' as CalendarMode
  };

  constructor() {}

}
