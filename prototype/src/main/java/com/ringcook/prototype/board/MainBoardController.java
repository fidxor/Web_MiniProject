package com.ringcook.prototype.board;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class MainBoardController {

    private final MainBoardRepository mainBoardRepository;

    @GetMapping("/board")
    public List<MainBoard> getlist() {
        return mainBoardRepository.findAll();
    }
}
