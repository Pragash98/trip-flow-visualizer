import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripFlowComponent } from './trip-flow/trip-flow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TripFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trip-flow-visualizer';
}
