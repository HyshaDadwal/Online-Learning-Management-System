Online Learning Management System 🧑‍💻🧑‍💻

Overview
The Online Learning Management System (LMS) is a Java-based application designed to manage user accounts, courses, and enrollments for educational platforms. It allows teachers to manage courses and students to enroll in them, providing a foundation for more advanced LMS features.

Features
User Management: Add and retrieve user details (students, teachers, admins).
Course Management: (To be implemented) Create and manage courses.
Enrollment Management: (To be implemented) Track student enrollments in courses.
Project Structure
graphql
Copy code

Prerequisites
Java: JDK 17 or higher
MySQL: Installed and running
IDE: IntelliJ IDEA, Eclipse, or any Java IDE
MySQL JDBC Driver: Add the driver to your project.

Setup Instructions
1. Clone the Repository
bash
Copy code
git clone <repository-url>

2. Set Up the Database
Create a database in MySQL:
sql
Copy code
CREATE DATABASE learning_management;
Execute the SQL script to set up tables:
bash
Copy code
mysql -u <username> -p learning_management < sql/schema.sql

3. Configure the Project
Update the DBConnection.java file with your database credentials:
java
Copy code
private static final String URL = "jdbc:mysql://localhost:3306/learning_management";
private static final String USER = "root"; // Replace with your username
private static final String PASSWORD = "your_password"; // Replace with your password

4. Run the Application
Compile and run the project in your IDE.
Alternatively, use the terminal:
bash
Copy code
javac -d bin -sourcepath src src/controller/Main.java
java -cp bin controller.Main
Usage
Add User: Provide name, email, password, and role.
List Users: View all registered users.
Exit: Exit the application.
Future Enhancements
Implement course management.
Add enrollment functionalities.
Create a graphical user interface (GUI).
Enhance role-based access control.