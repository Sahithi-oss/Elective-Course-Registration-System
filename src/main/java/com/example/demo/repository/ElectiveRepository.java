package com.example.demo.repository;

import com.example.demo.entity.Elective;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ElectiveRepository extends JpaRepository<Elective, Long> {
    List<Elective> findByBranchOrBranch(String branch, String all);
}
