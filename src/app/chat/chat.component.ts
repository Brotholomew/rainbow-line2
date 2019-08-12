import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  chatBubbleColors = ['#e5324f', '#e5324f', '#e5324f', '#cfe293', '#b2e2f9', '#bfc4e4'];
  expanded = false;
  height: string;
  showSideMenu = false;

  constructor(
    public user: UserService,
  ) { }

  messageContent = new FormControl('');

  ngOnInit() {
    let messagesCount = 0;
    var shouldScroll = () => {
      let input = document.getElementById('input-box');
      let messages = document.getElementById('messages');
      let header = document.getElementById('header');
      let inputHeight = input.clientHeight * 100 / window.innerHeight;
      let headerHeight = header.clientHeight * 100 / window.innerHeight;
      this.height = (100 - inputHeight - headerHeight) + 'vh';
      messages.style.gridArea = this.showSideMenu ? '2 / 1 / 3 / 2' : '2 / 1 / 3 / 3';
      input.style.gridArea = this.showSideMenu ? '3 / 1 / 4 / 2' : '3 / 1 / 4 / 3';
      if (this.expanded === true) {
        messages.style.height = this.height;        
      }
      if (messages.scrollHeight > messages.clientHeight && this.user.messages.length !== messagesCount) {
        messages.scrollTop = messages.scrollHeight;
      };
      messagesCount = this.user.messages.length;
    };
    
    setInterval(shouldScroll, 1);
  }

  onSend() {
    if (this.expanded === false && this.messageContent.value !== '')
      {this.expand();}
    if (this.messageContent.value !== '')
      {this.user.sendMessage(this.user.user, this.messageContent.value);}
    this.messageContent.reset();
  }

  expand() {
    this.expanded = true;
    let wrapper = document.getElementById('main-wrapper');
    let messages = document.getElementById('messages');
    messages.style.height = this.height;        
    wrapper.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

}
