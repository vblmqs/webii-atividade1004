import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './page/soma';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SomaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent {
  title = 'soma';
}
