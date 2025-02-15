import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Message  = {
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
  private readonly baseUrl = 'https://4cd1-2401-4900-1c5a-4e15-da3a-ddff-fef1-f6ef.ngrok-free.app';

  constructor(private readonly httpClient: HttpClient) { }

  public registerClient(userId: string) {
    return this.httpClient.post<GenericResponse>(`${this.baseUrl}/register`, null, {headers: {'UserId': userId, 'ngrok-skip-browser-warning': 'true'}});
  }

  public sendMessage(userId: string, message: string) {
    return this.httpClient.post<GenericResponse>(`${this.baseUrl}/message/send`, {'to': userId, 'content': message}, {headers: {'UserId': userId, 'ngrok-skip-browser-warning': 'true'}});
  }

  public pollMessages(userId: string) {
    return this.httpClient.get<Message[]>(`${this.baseUrl}/message/poll`, {headers: {'UserId': userId, 'ngrok-skip-browser-warning': 'true'}});
  }
}
