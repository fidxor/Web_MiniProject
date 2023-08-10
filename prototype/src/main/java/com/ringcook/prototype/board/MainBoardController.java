package com.ringcook.prototype.board;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class MainBoardController {

    private final MainBoardRepository mainBoardRepository;

    private final CommentRepository commentRepository;

    @GetMapping("/board")
    public List<MainBoard> getlist() {
        return mainBoardRepository.findAll();
    }

    @GetMapping(value = "/board/{id}")
    public Optional<MainBoard> detail(@PathVariable("id") Integer id) {
        return mainBoardRepository.findById(id);
    }
}
