import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: any;
  readonly url: string = "http://localhost:3000"

  constructor(private http: HttpClient) {
    this.socket = io.connect(this.url);
  }

  public emit(eventName: string, data: any) {
    this.socket.emit(eventName, data)
  }

  public getMessage() {
    return Observable.create((observer: any) => {
      this.socket.on('new-msg', (data: any) => {
        observer.next(data);
      })
    })
  }
}
