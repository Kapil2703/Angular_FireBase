import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../events/event-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.readNotifications();
  }

  readNotifications() {
    console.log('Inside Read Notifications');
    //this.eventService.recieve().then(message => console.log(message));
  }
}
