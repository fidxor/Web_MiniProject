package com.ringcook.prototype.board;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
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

    @GetMapping(value = "/comment-create/{id}")
    public void commentSubmit(@PathVariable{"id"} Integer id, @RequestBody
    Map<String, String> map) {
        MainBoard mainBoard = this.mainBoardRepository.getReferenceById(id);
        Commnet commnet = new Commnet();
        commnet.setBody(map.get("body"));
        commnet.setCreatTime(LocalDateTime.now());
        commnet.setMainBoard(mainBoard);
        commentRepository.save(commnet);
    }

    @GetMapping(value = "/MainBoard-create")
    public void mainBoardSubmit(@RequestBody Map<String, String> map) {
        MainBoard m = new MainBoard();
        m.setHead(map.get("Head"));
        m.setBody(map.get("body"));
        m.setCreatTime(LocalDateTime.now());
        mainBoardRepository.save(commnet);
    }

    @PutMapping(value = "/MainBoard-create/{id}")
    public void mainBoardModify(@PathVariable{"id"} Integer id,
    @RequestBody Map<String, String> map) {
        MainBoard m = this.mainBoardRepository.getReferenceById(id);
        m.setHead(map.get("Head"));
        m.setBody(map.get("body"));
        m.setCreatTime(LocalDateTime.now());
        mainBoardRepository.save(m);
    }

    @DeleteMapping(value = "/MainBoard-delete/{id}")
    public String mainBoardDelete(@PathVariable("id") Integer id) {
        Optional<MainBoard> mainBoard = this.mainBoardRepository.findById(id);
        if (mainBoard.isPresent()) {
            MainBoard m = mainBoard.get();
            mainBoardRepository.delete(m);
            return null;
        } else {
            return "not delete";
        }
    }
}
