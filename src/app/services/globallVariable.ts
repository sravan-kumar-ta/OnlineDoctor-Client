import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class GloballVar {
    public domain = 'http://localhost:8000'
    
    public socketDomain = "https://online-doctor-chat-server.herokuapp.com/"
}