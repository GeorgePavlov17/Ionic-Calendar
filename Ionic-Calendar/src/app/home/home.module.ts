import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgCalendarModule } from 'ionic6-calendar';
import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg';
registerLocaleData(localeBg, 'bg-BG');


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCalendarModule
  ],
  declarations: [HomePage],
  providers: [{provide: LOCALE_ID, useValue: 'bg-BG'}]
})
export class HomePageModule {}
