

# Elective Course Registration System

A web-based application built using Spring Boot to manage university elective course registration, timetable scheduling, and role-based dashboards for students, faculty, and administrators. The system ensures valid course selection through conflict detection, seat management, and approval workflows.

---

## Overview

This project simulates a real-world academic registration system where students can browse and enroll in elective courses while adhering to constraints such as timetable conflicts and course limits. Faculty and administrators can manage course offerings, monitor registrations, and approve or reject requests.

---

## Features

* Role-based authentication (Student, Faculty, Admin)
* Elective course browsing and registration
* Validation rules for course selection
* Timetable conflict detection
* Seat availability management
* Faculty/Admin approval workflow
* Academic handbook reference integration
* Dashboard views for each role

---

## Tech Stack

**Backend**

* Java
* Spring Boot
* JPA / Hibernate

**Frontend**

* HTML5
* CSS3
* JavaScript (Vanilla)

**Database**


- MySQL

**Build Tool**

* Maven

---

## System Architecture

The application follows a layered architecture:

* Controller Layer: Handles HTTP requests and responses
* Service Layer: Contains business logic and validation
* Repository Layer: Manages database interactions using JPA
* Frontend Layer: Static web pages served via Spring Boot

---

## Getting Started

### Prerequisites

* Java 17 or higher
* Maven installed (or use the included Maven wrapper)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/elective-course-registration-system.git
cd elective-course-registration-system
```

Run the application:

```bash
./mvnw spring-boot:run
```

### Access the Application

Open a browser and navigate to:

http://localhost:8080/login.html

---

## Project Structure

```
elective-course-registration-system/
│
├── src/
│   ├── main/
│   │   ├── java/                 # Application source code
│   │   ├── resources/            # Configuration files
│   │   └── static/               # Frontend (HTML, CSS, JS)
│
├── pom.xml                       # Maven configuration
└── README.md
```

---

## Key Functional Modules

* User Management: Handles authentication and role-based access
* Course Management: Allows creation and maintenance of elective courses
* Registration System: Manages student enrollment and validation
* Timetable Engine: Detects scheduling conflicts
* Approval Workflow: Enables faculty/admin to approve registrations

---

## Future Enhancements

* Integration with a React-based frontend
* Persistent database support (PostgreSQL or MySQL)
* JWT-based authentication and authorization
* Email notifications for registration status
* REST API documentation using Swagger

---

## Usage

1. Log in using the appropriate role credentials
2. Students can browse and register for courses
3. System validates course selection and detects conflicts
4. Faculty/Admin review and approve registrations
5. Approved courses are reflected in the student dashboard

---

## License

This project is intended for educational and demonstration purposes.
