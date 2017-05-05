import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details'
//import { EventService } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //providers: [EventService]
})
export class HomePage {

  itemDetailsPage = ItemDetailsPage;
  events: Array<{title: string, date: any, year: any, time:any}>;

  constructor(public navCtrl: NavController/*, public eventService: EventService*/) {
    this.events= [
      {title: "International Women's Day", date: "March 08" , year:"2017", time:"10:00 AM"},
      {title: "HCL Women Leadership Talk", date: "March 18" , year:"2017", time:"10:00 AM"},
      {title: "HCL Women Leadership Talk", date: "April 18" , year:"2017", time:"10:00 AM"},
      {title: "Mother's Day Celebration", date: "March 14" , year:"2017", time:"10:00 AM"}
    ];

  }

}
