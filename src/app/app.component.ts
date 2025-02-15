import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private readonly ApiService: ApiService) { }

  title = 'Welcome to Chatty Patty';
  name: string = "";
  registrationResult = "";
  

  registerName() {
    if (this.name === "") {
      alert("Please enter a name");
      return;
    }

    this.ApiService.registerClient(this.name).subscribe((response) => {
      this.registrationResult = response.message;
    });
  }
}
