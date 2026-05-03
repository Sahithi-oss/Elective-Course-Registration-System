package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String role;
    private String branch;
    private Double cgpa;

    public User(String name, String email, String password, String role, String branch, Double cgpa) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.branch = branch;
        this.cgpa = cgpa;
    }
}
