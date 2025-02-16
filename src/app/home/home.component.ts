import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly apiService: ApiService, private readonly router: Router) { }

  title = 'Welcome to Chatty Patty';
  name: string = "";
  registrationResult = "";
  

  registerName() {
    if (this.name === "") {
      alert("Please enter a name");
      return;
    }

    this.apiService.registerClient(this.name).subscribe((response) => {
      this.router.navigate(['/chat'], {queryParams: {userId: this.name}});
    });
  }
}
