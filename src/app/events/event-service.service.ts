import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../model/event';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private eventUrl: string;

  constructor(private http: HttpClient) {
    this.eventUrl = 'http://localhost:8080/';
  }

  public recieve(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }

  public send(event: Event) {
    return this.http.post<Event>(this.eventUrl, event);
  }
}
