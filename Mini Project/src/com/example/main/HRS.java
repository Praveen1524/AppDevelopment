package com.example.main;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;
import com.example.dao.RoomDAO;
import com.example.dao.RoomDAOImpl;
import com.example.dao.BookingDAO;
import com.example.dao.BookingDAOImpl;
import com.example.model.Room;
import com.example.model.Booking;

public class HRS extends inherit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        RoomDAO roomDao = new RoomDAOImpl();
        BookingDAO bookingDao = new BookingDAOImpl();
        inherit t = new inherit();
        System.out.println(t.Topic);
//        System.out.println("Hotel Reservation System");
        System.out.println("========================");

        

        while (true) {
            System.out.println("1. Admin");
            System.out.println("2. View Available Rooms");
            System.out.println("3. Book a Room");
            System.out.println("4. View Bookings");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            System.out.println();

            switch (choice) {
            case 1:
            	System.out.println("Enter Username:");
            	String user = scanner.next();

            	System.out.println("Enter Password:");
            	String pwd = scanner.next();
            	System.out.println();

            	if(pwd.equals("Admin123") && user.equals("Praveen")) {
            		System.out.println("Welcome Admin!");
            		System.out.println("Admin: "+user);
            		System.out.println();

		            System.out.println("1. Add Booking");
		            System.out.println("2. Manage Bookings");
		            System.out.println("3. Cancel booking");
		            System.out.print("Enter your choice: ");
		            int achoice = scanner.nextInt();
		            switch (achoice) {
		            
		            case 2:
				                System.out.println("1. View bookings by Date");
				                System.out.println("2. View bookings by Room_id");
				                System.out.println("3. View bookings by Name");
				                System.out.println("4. View all bookings");
				//                System.out.println("4. Cancel booking");
				                System.out.print("Enter your choice: ");
				                int manageChoice = scanner.nextInt();
				                switch (manageChoice) {
				                    case 1:
				                        System.out.println("Enter date (yyyy-mm-dd):");
				                        String dateStr = scanner.next();
				                        LocalDate date = LocalDate.parse(dateStr);
				                        System.out.println("Bookings for " + date + ":");
				                        System.out.println();
				                        System.out.println("=========================================================================");
				
				                        System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout\tRoomType");
				                        System.out.println("=========================================================================");
				
				                        List<Booking> bookingsByDate = bookingDao.getBookingsByDate(date);
				//                        for (Booking booking : bookingsByDate) {
				//                            System.out.println(booking);
				//                        }
				                        System.out.println("-------------------------------------------------------------------------");
				
				                        System.out.println();
				                        break;
				                    case 2:
				                        System.out.println("Enter room ID:");
				                        int roomId = scanner.nextInt();
				                        System.out.println("Bookings for Room ID " + roomId + ":");
				                        System.out.println();
				                        System.out.println("=========================================================================");
				
				                        System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout\tRoomType");
				                        System.out.println("=========================================================================");
				
				                        List<Booking> bookingsByRoom = bookingDao.getBookingsByRoom(roomId);
				//                        for (Booking booking : bookingsByRoom) {
				//                            System.out.println(booking);
				//                        }
				                        System.out.println("-------------------------------------------------------------------------");
				
				                        System.out.println();
				                        break;
				                    case 3:
				                        System.out.println("Enter name:");
				                        String searchGuestName = scanner.next();
				                        System.out.println("Bookings for Name " + searchGuestName + ":");
				                        System.out.println();
				                        System.out.println("=========================================================================");
				
				                        System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout\tRoomType");
				                        System.out.println("=========================================================================");
				
				                        List<Booking> bookingsByGuestName = bookingDao.getBookingsByGuestName(searchGuestName);
				//                        for (Booking booking : bookingsByGuestName) {
				//                            System.out.println(booking);
				//                        }
				                        System.out.println("--------------------------------------------------------------------------");
				                        System.out.println();
				                        break;
				                    case 4:
				                    	List<Booking> allBookings = bookingDao.getAllBookings();
				                        System.out.println("========================================================");
				                        System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout");
				                        System.out.println("========================================================");

				                    	for(Booking i:allBookings) {
				                    		System.out.println(i);
				                    	}
				                        System.out.println("--------------------------------------------------------");
				                        System.out.println();
				                    	break;
				                    default:
				                        System.out.println("Invalid choice.");
				                        System.out.println();
				                        break;
				                }
				                break;
				            
				            case 3:
				
				               
				                        System.out.println("Enter booking ID to cancel:");
				                        int cancelBookingId = scanner.nextInt();
				                        Booking bookingToCancel = bookingDao.getBookingById(cancelBookingId);
				                        if (bookingToCancel != null) {
				                            bookingDao.cancelBooking(cancelBookingId);
				                            roomDao.updateRoomAvailability(bookingToCancel.getRoomId(), true);
				                            System.out.println("Booking cancelled.");
				                        } else {
				                            System.out.println("Booking not found.");
				                        }
				                        System.out.println();
				                        break;
				                       
				            
				            case 1:
				                System.out.println("Enter Name:");
				                String guestName = scanner.next();
				                System.out.println("Enter room type:");
				                String roomType = scanner.next();
				                Room selectedRoom = roomDao.getAvailableRooms(roomType);
				                System.out.println("Enter check-in date (yyyy-mm-dd):");
				                String checkInDateStr = scanner.next();
				                LocalDate checkInDate = LocalDate.parse(checkInDateStr);
				                System.out.println("Enter check-out date (yyyy-mm-dd):");
				                String checkOutDateStr = scanner.next();
				                LocalDate checkOutDate = LocalDate.parse(checkOutDateStr);
				                if (selectedRoom == null) {
				                	System.out.println("No available rooms of type " + roomType);
				                } 
				
				                else {
				                    Booking newBooking = new Booking();
				                    newBooking.setGuestName(guestName);
				                    newBooking.setRoomId(selectedRoom.getRoomId());
				                    newBooking.setCheckInDate(checkInDate);
				                    newBooking.setCheckOutDate(checkOutDate);
				                    bookingDao.createBooking(newBooking);
				                    roomDao.updateRoomAvailability(selectedRoom.getRoomId(), false);
				                    System.out.println("Reservation successful.");
				                }
				                System.out.println();
				                break;
				
				            }
            	}
            	else {
            		System.out.println("Invalid Password");
            	}
				            break;
            
            
            
            
            
            
            
            
            
                case 2:
                    List<Room> availableRooms = roomDao.getAvailableRooms();
                    if(availableRooms.size()==0) {
                    	System.out.println("No Available Rooms");
                    	System.out.println();

                    }
                    else {
                    	
                    	System.out.println();
                    	System.out.println("Available Rooms:");
                    	System.out.println("=================");
                    	System.out.println("Roomid\tRoomType");
                        System.out.println("=================");

                    	for (Room room : availableRooms) {
                    		System.out.println(room);
                    	}
                    	System.out.println("-----------------");

                    	System.out.println();
                    }
                    break;
                case 3:
                    System.out.println("Enter Name:");
                    String guestName = scanner.next();
                    System.out.println("Enter room type:");
                    String roomType = scanner.next();
                    Room selectedRoom = roomDao.getAvailableRooms(roomType);
                    System.out.println("Enter check-in date (yyyy-mm-dd):");
                    String checkInDateStr = scanner.next();
                    LocalDate checkInDate = LocalDate.parse(checkInDateStr);
                    System.out.println("Enter check-out date (yyyy-mm-dd):");
                    String checkOutDateStr = scanner.next();
                    LocalDate checkOutDate = LocalDate.parse(checkOutDateStr);
                    if (selectedRoom == null) {
                    	System.out.println("No available rooms of type " + roomType);
                    } 

                    else {
                        Booking newBooking = new Booking();
                        newBooking.setGuestName(guestName);
                        newBooking.setRoomId(selectedRoom.getRoomId());
                        newBooking.setCheckInDate(checkInDate);
                        newBooking.setCheckOutDate(checkOutDate);
                        bookingDao.createBooking(newBooking);
                        roomDao.updateRoomAvailability(selectedRoom.getRoomId(), false);
                        System.out.println("Reservation successful.");
                    }
                    System.out.println();
                    break;
                case 4:
//                    System.out.println("1. View bookings by Date");
//                    System.out.println("2. View bookings by Room_id");
                    System.out.println("1. View Your Booking");
                    System.out.println("2. Cancel booking");
                    System.out.print("Enter your choice: ");
                    int manageChoice = scanner.nextInt();
                    switch (manageChoice) {
//                        case 1:
//                            System.out.println("Enter date (yyyy-mm-dd):");
//                            String dateStr = scanner.next();
//                            LocalDate date = LocalDate.parse(dateStr);
//                            System.out.println("Bookings for " + date + ":");
//                            System.out.println();
//                            System.out.println("=========================================================================");
//
//                            System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout\tRoomType");
//                            System.out.println("=========================================================================");
//
//                            List<Booking> bookingsByDate = bookingDao.getBookingsByDate(date);
////                            for (Booking booking : bookingsByDate) {
////                                System.out.println(booking);
////                            }
//                            System.out.println("-------------------------------------------------------------------------");
//
//                            System.out.println();
//                            break;
//                        case 2:
//                            System.out.println("Enter room ID:");
//                            int roomId = scanner.nextInt();
//                            System.out.println("Bookings for Room ID " + roomId + ":");
//                            System.out.println();
//                            System.out.println("=========================================================================");
//
//                            System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout\tRoomType");
//                            System.out.println("=========================================================================");
//
//                            List<Booking> bookingsByRoom = bookingDao.getBookingsByRoom(roomId);
////                            for (Booking booking : bookingsByRoom) {
////                                System.out.println(booking);
////                            }
//                            System.out.println("-------------------------------------------------------------------------");
//
//                            System.out.println();
//                            break;
                        case 1:
                            System.out.println("Enter name:");
                            String searchGuestName = scanner.next();
                            System.out.println("Bookings for Name " + searchGuestName + ":");
                            System.out.println();
                            System.out.println("=========================================================================");

                            System.out.println("Booking_id    Room_id\tName\tcheckin\t\tcheckout\tRoomType");
                            System.out.println("=========================================================================");

                            List<Booking> bookingsByGuestName = bookingDao.getBookingsByGuestName(searchGuestName);
//                            for (Booking booking : bookingsByGuestName) {
//                                System.out.println(booking);
//                            }
                            System.out.println("--------------------------------------------------------------------------");
                            System.out.println();
                            break;
                        case 2:
                            System.out.println("Enter booking ID to cancel:");
                            int cancelBookingId = scanner.nextInt();
                            Booking bookingToCancel = bookingDao.getBookingById(cancelBookingId);
                            if (bookingToCancel != null) {
                                bookingDao.cancelBooking(cancelBookingId);
                                roomDao.updateRoomAvailability(bookingToCancel.getRoomId(), true);
                                System.out.println("Booking cancelled.");
                            } else {
                                System.out.println("Booking not found.");
                            }
                            System.out.println();
                            break;
                        default:
                            System.out.println("Invalid choice.");
                            System.out.println();
                            break;
                    }
                    break;
                case 5:
                    System.out.println("ThankYou!");
                    System.out.println();
                    scanner.close();
                    System.exit(0);
                
                default:
                    System.out.println("Invalid choice. Please try again.");
                    System.out.println();
            }
        }
    }
}
