package com.example.demo.repository;

import com.example.demo.entity.Selection;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SelectionRepository extends JpaRepository<Selection, Long> {
    List<Selection> findByUser(User user);
}
