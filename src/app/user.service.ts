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

  conversations: conversation[] = [];

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

  messages: message[] = [];

  sendMessage(user: user, content: string) {
    let id:string;
    if (this.messages === undefined)
      id = 'mess1';
    else 
      id = 'mess' + (this.messages.length + 1).toString();
    let mess: message = {
      content: content,
      senderID: user.ID,
      recipientsID: ['Tęczowa Linia'],
      conversationID: 'conv001',
      ID: id.toString(),
    }
    this.messages.push(mess);

    if (this.messages.length === 1) {
      let ans: message = {
        content: 'Witaj! Dziękujemy za zaufanie naszemu serwisowi i skorzystaniu z naszych usług. Rozpocząłeś właśnie nową anonimową konwersację z jednym z naszych wolontariuszy, który już za niedługo zostanie Tobie podpoorządkowany. Pamiętaj, że po zamknięciu tej karty w przeglądarce Wasza rozmowa zostanie usunięta... W celu zapisania swoich rozmów i kontynuowania ich później, możesz założyć darmowe konto tutaj []. (Wszystkie rozmowy będziesz mógł/a nadal prowadzić anonimowo!',
        senderID: 'Tęczowa Linia',
        recipientsID: [this.user.ID],
        conversationID: 'conv001',
        ID: 'mess',
      };
      this.messages.push(ans);
      let ans2: message = {
        content: 'Niestety obecnie żaden z naszych wolontariuszy nie jest online :( . Mamy nadzieję, że za chwilę ktoś się pojawi i przepraszamy za kłopot. W międzyczasie zachęcamy do założenia konta w celu zapisania rozmowy na później!',
        senderID: 'Tęczowa Linia',
        recipientsID: [this.user.ID],
        conversationID: 'conv001',
        ID: 'mess',
      };
      this.messages.push(ans2);
    }
  }
}
