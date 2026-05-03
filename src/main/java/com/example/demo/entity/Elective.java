package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "electives")
@Data
public class Elective {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String faculty;
    private Integer credits;
    private String type;
    private String branch;
    private String day;
    private String time;
    @Column(columnDefinition = "TEXT")
    private String prerequisites;
}
