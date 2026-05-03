-- Create Database
CREATE DATABASE IF NOT EXISTS university_portal;
USE university_portal;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL, -- student, ADMIN, FACULTY
    branch VARCHAR(50),
    cgpa DOUBLE DEFAULT 0.0
);

-- 2. Electives Table
CREATE TABLE IF NOT EXISTS electives (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    faculty VARCHAR(100),
    credits INT,
    type VARCHAR(20), -- open, liberal
    branch VARCHAR(50), -- ALL, CSE, ECE, etc.
    day VARCHAR(20),
    time VARCHAR(50),
    prerequisites TEXT
);

-- 3. Selections Table (Student Preferences)
CREATE TABLE IF NOT EXISTS selections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    elective_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (elective_id) REFERENCES electives(id)
);

-- 4. Timetable Table (Core Subjects)
CREATE TABLE IF NOT EXISTS timetable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    branch VARCHAR(50),
    subject VARCHAR(100),
    code VARCHAR(20),
    day VARCHAR(20),
    time VARCHAR(50),
    faculty VARCHAR(100)
);

-- SAMPLE DATA
-- Passwords are hashed in production, but for demo we use plain or Spring BCrypt
-- Admin User
INSERT INTO users (name, email, password, role, cgpa) 
VALUES ('Admin', 'admin@mahindrauniversity.edu.in', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.7uCyQ5a', 'ADMIN', 0.0);

-- Student User (Sahithi)
INSERT INTO users (name, email, password, role, branch, cgpa) 
VALUES ('Sahithi', 'se23umcs072@mahindrauniversity.edu.in', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.7uCyQ5a', 'student', 'Integrated CSE', 8.5);

-- Electives
INSERT INTO electives (code, name, description, faculty, credits, type, branch, day, time, prerequisites)
VALUES 
('CS3001', 'Advanced Java Programming', 'Deep dive into J2EE and Spring Boot.', 'Dr. Arun Kumar', 3, 'open', 'CSE', 'Tuesday', '11:30-12:30', 'Core Java'),
('CS3002', 'Data Science Basics', 'Statistical analysis and Python data tools.', 'Dr. Priya Sharma', 3, 'open', 'ALL', 'Wednesday', '09:30-10:30', 'None'),
('HS3001', 'Cyber Security', 'Networks and ethical hacking.', 'Prof. Neha Gupta', 3, 'liberal', 'ALL', 'Friday', '08:30-09:30', 'None');

-- Timetable
INSERT INTO timetable (branch, subject, code, day, time, faculty)
VALUES 
('Integrated CSE', 'Software Engineering', 'CS3201', 'Monday', '10:30-11:30', 'Dr. Smith'),
('Integrated CSE', 'Deep Neural Networks', 'CS3223', 'Tuesday', '13:30-14:30', 'Dr. Amit Shah');
