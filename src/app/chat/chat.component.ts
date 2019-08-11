import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { message } from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  expanded = false;
  height: string;

  constructor(
    public user: UserService,
  ) { }

  messageContent = new FormControl('');

  ngOnInit() {
  }

  onSend() {
    //window.alert(this.messageContent.value);
    this.messageContent.reset();
    if (this.expanded === false)
      this.expand();
  }

  expand() {
    this.expanded = true;
    let messages = document.getElementById('messages');
    let header = document.getElementById('header');
    let input = document.getElementById('input-box');
    messages.style.fontSize = '20px';
    header.style.fontSize = '20px';
    let inputHeight = input.clientHeight * 100 / window.innerHeight;
    let headerHeight = header.clientHeight * 100 / window.innerHeight;
    this.height = (100 - inputHeight - headerHeight) + 'vh';
    let wrapper = document.getElementById('main-wrapper');
    messages.style.height = this.height;
    wrapper.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

}
