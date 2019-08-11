import { Injectable } from '@angular/core';
import { conversation, message, user } from './message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  // fetch_new_anonymous_usr_from_server

  user = {
    ID: 'usr001',
    type: 'anonymous',
    conversationsID: [],
  };

  // create new conversations for this user and fetch them 

  conversations: conversation[];

  startConversation() {
    // create new and fetch new conversation from the server
    let conv: conversation = {
      conversationID: 'conv001',
      initiatiorID: this.user.ID,
      recipientsID: ['Tęczowa Linia automat'],
      messagesID: [],
      anonimity: true,
    };
    this.user.conversationsID.push(conv.conversationID);
    this.conversations.push(conv);
  }

  //create messages array for this user

  messages: message[];

  sendMessage(user: user, content: string) {
    let id = () => {
      if (this.messages.length === 0)
        return 'mess001';
      else 
        return 'mess' + (this.messages.length);
    };
    let mess: message = {
      content: content,
      senderID: user.ID,
      recipientsID: ['Tęczowa Linia'],
      conversationID: 'conv001',
      ID: id.toString(),
    }
    this.messages.push(mess);
    this.conversations[0].messagesID.push(mess.ID)
  }
}
