import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class GloballVar {
    public domain = 'http://localhost:8000/api'
    // public domain = 'https://online-doctor-x.herokuapp.com/api'

    // public socketDomain = "http://localhost:3000"
    public socketDomain = "https://online-doctor-chat-server.herokuapp.com/"
}