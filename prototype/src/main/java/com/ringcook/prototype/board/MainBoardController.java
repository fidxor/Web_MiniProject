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

    @GetMapping(value = "/comment-create/{bnum}")
    public void commentSubmit(@PathVariable("bnum") Integer bnum, @RequestBody Map<String, String> map) {
        MainBoard mainBoard = this.mainBoardRepository.getReferenceById(bnum);
        Comment commnet = new Comment();
        commnet.setBody(map.get("Body"));
        commnet.setCreatTime(LocalDateTime.now());
        commnet.setMainBoard(mainBoard);
        commentRepository.save(commnet);
    }

    @PostMapping(value = "/MainBoard-create")
    public void mainBoardSubmit(@RequestBody Map<String, String> map) {
        MainBoard m = new MainBoard();
        m.setSubject(map.get("subject"));
        m.setContent(map.get("content"));
        m.setCreatetime(LocalDateTime.now());
        mainBoardRepository.save(m);
    }

    @PutMapping(value = "/MainBoard-modify/{bnum}")
    public void mainBoardModify(@PathVariable("bnum") Integer bnum, @RequestBody Map<String, String> map) {
        MainBoard m = this.mainBoardRepository.getReferenceById(bnum);
        m.setSubject(map.get("Head"));
        m.setContent(map.get("Body"));
        m.setCreatetime(LocalDateTime.now());
        mainBoardRepository.save(m);
    }

    @DeleteMapping(value = "/MainBoard-delete/{bnum}")
    public String mainBoardDelete(@PathVariable("bnum") Integer bnum) {
        Optional<MainBoard> mainBoard = this.mainBoardRepository.findById(bnum);
        if (mainBoard.isPresent()) {
            MainBoard m = mainBoard.get();
            mainBoardRepository.delete(m);
            return null;
        } else {
            return "not delete";
        }
    }
}
