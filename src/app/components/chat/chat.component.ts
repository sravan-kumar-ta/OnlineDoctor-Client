import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  sender: any;
  receiver: any;

  constructor(
    private route: ActivatedRoute,
    private socketService: WebsocketService,
    private userService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.senderId = params.get('senderId');
      this.receiverId = params.get('receiverId');
    });

    this.socketService.emit('join', { userid: this.senderId });

    this.socketService.getMessage().subscribe((data: any) => {
      this.socketMessages.push(data);
    });

    setTimeout(() => {
      this.userService.getUserById(this.receiverId).subscribe(data => {
        this.receiver = data;
        this.userService.getUser().subscribe(data => {
          this.sender = data;
        })
      });
    }, 1000);
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
      parent!.scrollTop = parent!.scrollHeight - parent!.clientHeight;
    }
  }
}
