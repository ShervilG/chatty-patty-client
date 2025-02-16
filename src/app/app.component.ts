import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
