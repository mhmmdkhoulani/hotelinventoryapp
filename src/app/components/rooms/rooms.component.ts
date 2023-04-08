import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel";
  roomNumber = 12;
  available = true;
  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
