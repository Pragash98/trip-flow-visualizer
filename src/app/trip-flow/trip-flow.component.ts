import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

interface Trip {
  id: number;
  start: string;
  end: string;
  isContinued: boolean;
  isDuplicate: boolean;
}

@Component({
  selector: 'app-trip-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-flow.component.html',
  styleUrl: './trip-flow.component.css'
})

export class TripFlowComponent {
  trips: Trip[] = [];
  newStart = '';
  newEnd = '';
  nextId = 1;

  addTrip() {
    if (!this.newStart || !this.newEnd) return;

    const start = this.newStart.substring(0, 3).toUpperCase();
    const end = this.newEnd.substring(0, 3).toUpperCase();

    const prevTrip = this.trips.length > 0 ? this.trips[this.trips.length - 1] : null;
    const isContinued = prevTrip?.end === start;
    const isDuplicate = prevTrip?.start === start && prevTrip?.end === end;

    this.trips.push({
      id: this.nextId++,
      start,
      end,
      isContinued,
      isDuplicate
    });

    this.newStart = '';
    this.newEnd = '';
  }
  
  clearAll() {
    this.trips = [];
  }

  removeTrip(id: number) {
    this.trips = this.trips.filter(trip => trip.id !== id);
  }
}
