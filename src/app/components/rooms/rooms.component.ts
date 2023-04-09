import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

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
  rooms: Room = { availableRooms: 3, bookedRooms: 5, totalRooms: 20 };

  roomList: RoomList[] = [
    {
      roomNumber: 1,

      roomType: 'Deluxe Room',
      amenities: "Free Wifi, Air condition, Tv",
      price: 200,
      photos: "https://placehold.co/600x400",
      checkInDate: new Date("11-nov-2021"),
      checkOutDate: new Date("11-nov-2021"),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room 1',
      amenities: "Free Wifi, Air condition, Tv",
      price: 2200,
      photos: "https://placehold.co/600x400",
      checkInDate: new Date("11-nov-2021"),
      checkOutDate: new Date("11-nov-2021"),
    },
    {
      roomNumber: 3,

      roomType: 'Deluxe Room 2',
      amenities: "Free Wifi, Air condition, Tv",
      price: 2030,
      photos: "https://placehold.co/600x400",
      checkInDate: new Date("11-nov-2021"),
      checkOutDate: new Date("11-nov-2021"),
    }
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
