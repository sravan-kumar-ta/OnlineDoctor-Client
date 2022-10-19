import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  inputMessage: string = '';
  senderId: any;
  receiverId: any;
  newMessage: any = {
    sender: null,
    receiver: null,
    message: ""
  }
  socketMessages = [{
    msg: "",
    senderid: 0,
    receiverid: 0
  }];

  constructor(private route: ActivatedRoute, private socketService: WebsocketService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.senderId = params.get('senderId');
      this.receiverId = params.get('receiverId');
    });

    this.socketService.emit('join', { userid: this.senderId });

    this.socketService.getMessage().subscribe((data: any) => {
      this.socketMessages.push(data);
    });
  }


  sendMessage(): void {
    this.newMessage = {
      sender: this.senderId,
      receiver: this.receiverId,
      message: this.inputMessage
    }

    if (this.inputMessage != "") {
      this.socketMessages.push({ msg: this.inputMessage, senderid: this.senderId, receiverid: this.receiverId });

      this.socketService.emit("new-message", { receiverid: this.receiverId, msg: this.inputMessage, senderid: this.senderId })
      this.inputMessage = '';
      
      let parent = document.getElementById('msg-box');
      parent!.scrollTop = parent!.scrollHeight - (parent!.clientHeight-350);
    }
  }
}
