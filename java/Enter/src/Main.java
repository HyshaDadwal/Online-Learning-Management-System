package controller;

import dao.UserDAO;
import model.User;

import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        UserDAO userDAO = new UserDAO();

        System.out.println("=== Online Learning Management System ===");
        while (true) {
            System.out.println("\n1. Add User");
            System.out.println("2. List All Users");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1 -> {
                    System.out.print("Enter name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter email: ");
                    String email = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String password = scanner.nextLine();
                    System.out.print("Enter role (STUDENT, TEACHER, ADMIN): ");
                    String role = scanner.nextLine().toUpperCase();

                    User user = new User(0, name, email, password, role, null);
                    boolean isAdded = userDAO.addUser(user);
                    if (isAdded) {
                        System.out.println("User added successfully!");
                    } else {
                        System.out.println("Failed to add user.");
                    }
                }
                case 2 -> {
                    List<User> users = userDAO.getAllUsers();
                    if (users.isEmpty()) {
                        System.out.println("No users found.");
                    } else {
                        System.out.println("=== List of Users ===");
                        for (User user : users) {
                            System.out.println("ID: " + user.getId());
                            System.out.println("Name: " + user.getName());
                            System.out.println("Email: " + user.getEmail());
                            System.out.println("Role: " + user.getRole());
                            System.out.println("Created At: " + user.getCreatedAt());
                            System.out.println("-------------------");
                        }
                    }
                }
                case 3 -> {
                    System.out.println("Exiting the system. Goodbye!");
                    System.exit(0);
                }
                default -> System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
