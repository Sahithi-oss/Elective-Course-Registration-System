package com.example.demo.controller;

import com.example.demo.entity.Elective;
import com.example.demo.entity.Selection;
import com.example.demo.entity.Timetable;
import com.example.demo.entity.User;
import com.example.demo.repository.ElectiveRepository;
import com.example.demo.repository.SelectionRepository;
import com.example.demo.repository.TimetableRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/academic")
@CrossOrigin(origins = "*")
public class AcademicController {

    @Autowired
    private ElectiveRepository electiveRepository;

    @Autowired
    private TimetableRepository timetableRepository;

    @Autowired
    private SelectionRepository selectionRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/electives")
    public List<Elective> getElectives(@RequestParam String branch) {
        return electiveRepository.findByBranchOrBranch(branch, "ALL");
    }

    @GetMapping("/timetable")
    public List<Timetable> getTimetable(@RequestParam String branch) {
        return timetableRepository.findByBranch(branch);
    }

    @GetMapping("/preferences/{userId}")
    public List<Elective> getPreferences(@PathVariable Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return selectionRepository.findByUser(user.get())
                    .stream()
                    .map(Selection::getElective)
                    .collect(Collectors.toList());
        }
        return List.of();
    }

    @PostMapping("/preferences")
    public ResponseEntity<?> savePreferences(@RequestBody Map<String, Object> payload) {
        Long userId = Long.valueOf(payload.get("userId").toString());
        List<Integer> electiveIds = (List<Integer>) payload.get("electiveIds");

        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // Clear existing
            List<Selection> existing = selectionRepository.findByUser(user);
            selectionRepository.deleteAll(existing);

            // Save new
            for (Integer eid : electiveIds) {
                Optional<Elective> electiveOpt = electiveRepository.findById(Long.valueOf(eid));
                if (electiveOpt.isPresent()) {
                    Selection s = new Selection();
                    s.setUser(user);
                    s.setElective(electiveOpt.get());
                    selectionRepository.save(s);
                }
            }
            return ResponseEntity.ok(Map.of("message", "Preferences saved successfully!"));
        }
        return ResponseEntity.badRequest().body(Map.of("message", "User not found"));
    }
}
