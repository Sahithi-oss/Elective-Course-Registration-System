package com.example.demo.config;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner loadData(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            Object[][] users = {
                {"Sahithi", "se23umcs072@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 8.5},
                {"Pavani", "se23umcs020@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 9.5},
                {"Sindhu", "se23umcs028@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 8.8},
                {"Kavya", "se23umcs068@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 9.2},
                {"Anny", "se23umcs036@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 8.7},
                {"Varshitha", "se23umcs063@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 9.3},
                {"Jojith", "se23umcs027@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 7.9},
                {"Jayanth", "se23umcs021@mahindrauniversity.edu.in", "12345", "STUDENT", "Integrated CSE", 7.8},
                {"Yasaswini", "se23ucse180@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech CSE", 9.5},
                {"Manozgna", "se23ucse181@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech CSE", 9.8},
                {"Divya", "se23ucse182@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech CSE", 9.1},
                {"Karthik", "se23ucse183@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech CSE", 8.6},
                {"Sneha", "se23ucse184@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech CSE", 9.0},
                {"Panchajanya", "se23uece042@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECE", 8.7},
                {"Anusha", "se23uece043@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECE", 9.2},
                {"Anish", "se23uece044@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECE", 8.5},
                {"Nikhil", "se23uece045@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECE", 8.9},
                {"Harika", "se23uece046@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECE", 9.3},
                {"Arjun", "se23uari073@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech AI", 8.9},
                {"Siri", "se23uari074@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech AI", 9.4},
                {"Vamsi", "se23uari075@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech AI", 8.7},
                {"Neha", "se23uari076@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech AI", 9.1},
                {"Manoj", "se23uari077@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech AI", 8.8},
                {"Meghana", "se23uecm056@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECM", 8.6},
                {"Lokesh", "se23uecm057@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECM", 9.0},
                {"Pooja", "se23uecm058@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECM", 8.7},
                {"Ajay", "se23uecm059@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECM", 8.5},
                {"Ritika", "se23uecm060@mahindrauniversity.edu.in", "12345", "STUDENT", "B.Tech ECM", 9.2},
                {"Rahul", "se23ucbt051@mahindrauniversity.edu.in", "12345", "STUDENT", "Biotech", 8.4},
                {"Keerthi", "se23ucbt052@mahindrauniversity.edu.in", "12345", "STUDENT", "Biotech", 8.9},
                {"Aditya", "se23ucbt053@mahindrauniversity.edu.in", "12345", "STUDENT", "Biotech", 8.6},
                {"Swathi", "se23ucbt054@mahindrauniversity.edu.in", "12345", "STUDENT", "Biotech", 9.1},
                {"Tarun", "se23ucbt055@mahindrauniversity.edu.in", "12345", "STUDENT", "Biotech", 8.7},
                {"Kiran", "se23umet033@mahindrauniversity.edu.in", "12345", "STUDENT", "Mechanical", 8.2},
                {"Praveen", "se23umet034@mahindrauniversity.edu.in", "12345", "STUDENT", "Mechanical", 8.8},
                {"Deepika", "se23umet035@mahindrauniversity.edu.in", "12345", "STUDENT", "Mechanical", 9.0},
                {"Sandeep", "se23umet036@mahindrauniversity.edu.in", "12345", "STUDENT", "Mechanical", 8.5},
                {"Lavanya", "se23umet037@mahindrauniversity.edu.in", "12345", "STUDENT", "Mechanical", 9.1},
                {"Ramesh", "se23uce061@mahindrauniversity.edu.in", "12345", "STUDENT", "Civil", 8.3},
                {"Naveen", "se23uce062@mahindrauniversity.edu.in", "12345", "STUDENT", "Civil", 8.7},
                {"Bhavya", "se23uce063@mahindrauniversity.edu.in", "12345", "STUDENT", "Civil", 9.2},
                {"Charan", "se23uce064@mahindrauniversity.edu.in", "12345", "STUDENT", "Civil", 8.6},
                {"Anjali", "se23uce065@mahindrauniversity.edu.in", "12345", "STUDENT", "Civil", 9.0},
                {"Nithin", "se23unt045@mahindrauniversity.edu.in", "12345", "STUDENT", "Nanotechnology", 8.1},
                {"Varun", "se23unt046@mahindrauniversity.edu.in", "12345", "STUDENT", "Nanotechnology", 8.5},
                {"Divakar", "se23unt047@mahindrauniversity.edu.in", "12345", "STUDENT", "Nanotechnology", 8.9},
                {"Sowmya", "se23unt048@mahindrauniversity.edu.in", "12345", "STUDENT", "Nanotechnology", 9.3},
                {"Tejaswi", "se23unt049@mahindrauniversity.edu.in", "12345", "STUDENT", "Nanotechnology", 8.8},
                {"Admin", "admin@mahindrauniversity.edu.in", "$2a$10$alySrVGx9mRKRVuTUf2dee7l60/LSbHNvCK2oAH5OX3OE9LzM9eq6", "ADMIN", "System", null},
                {"Faculty", "faculty@mahindrauniversity.edu.in", "$2a$10$k6qMiZCn/Y5ED9NRREoTnunerytHr4m/H60jaQQvFYaOhPwscPSKy", "FACULTY", "CSE", null},
                {"Faculty2", "professor@mahindrauniversity.edu.in", "$2a$10$rADJynb0bp0roUbndToYUORdWuUGBTuVHepahjZBKzPmmEDB0Fe/y", "FACULTY", "CSE", null}
            };

            for (Object[] uData : users) {
                String email = (String) uData[1];
                String rawPassword = (String) uData[2];
                // Only encode if not already hashed (BCrypt hashes start with $2a$)
                String password = rawPassword.startsWith("$2a$") ? rawPassword : passwordEncoder.encode(rawPassword);
                
                if (userRepository.findByEmail(email).isEmpty()) {
                    userRepository.save(new User(
                        (String) uData[0], 
                        email, 
                        password, 
                        (String) uData[3], 
                        (String) uData[4], 
                        (Double) uData[5]
                    ));
                }
            }
        };
    }
}
