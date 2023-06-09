export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomType: string; roomNumber: number;
    amenities: string;
    price: number;
    photos: string;
    checkInDate: Date;
    checkOutDate: Date;
    rating : number;
}