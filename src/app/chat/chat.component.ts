import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Message } from '../services/api/api.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, NgClass, NgFor, NgForOf],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  userId: string | null = null;
  to: string | null = null;
  messages: Message[] = [];
  newMessage: string = '';
  interval: any;

  constructor(private readonly route: ActivatedRoute, private readonly apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.queryParamMap.get('userId');
    const to = this.route.snapshot.queryParamMap.get('to');

    if (userId && to) {
      this.userId = userId;
      this.to = to;
      
      this.interval = setInterval(() => {
        this.apiService.pollMessages(this.userId as string).subscribe((messages) => {
          this.messages = this.messages.concat(messages);
        });
      }, 2000);
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  sendMessage() {
    if (this.userId && this.newMessage && this.to) {
      this.apiService.sendMessage(this.userId, this.to, this.newMessage).subscribe(() => {
        this.messages.push({from: 'me', content: this.newMessage});
        this.newMessage = '';
      });
    }
  }
}
