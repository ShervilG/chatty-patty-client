import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Message  = {
  from: string,
  content: string,
};

type GenericResponse = {
  message: string,
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://0cd2-2401-4900-1c5a-89db-da3a-ddff-fef1-f6ef.ngrok-free.app';

  constructor(private readonly httpClient: HttpClient) { }

  public registerClient(userId: string) {
    return this.httpClient.post<GenericResponse>(`${this.baseUrl}/register`, null, {headers: {'UserId': userId, 'ngrok-skip-browser-warning': 'true'}});
  }

  public sendMessage(userId: string, to: string, message: string) {
    return this.httpClient.post<GenericResponse>(`${this.baseUrl}/message/send`, {'to': to, 'content': message}, {headers: {'UserId': userId, 'ngrok-skip-browser-warning': 'true'}});
  }

  public pollMessages(userId: string) {
    return this.httpClient.get<Message[]>(`${this.baseUrl}/message/poll`, {headers: {'UserId': userId, 'ngrok-skip-browser-warning': 'true'}});
  }
}
