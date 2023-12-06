import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: any;
  readonly url: string = this.globall.socketDomain

  constructor(private globall: GloballVar) {
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
