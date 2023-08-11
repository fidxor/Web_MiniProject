package com.ringcook.prototype;

import com.ringcook.prototype.board.MainBoard;
import com.ringcook.prototype.board.MainBoardRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

@SpringBootTest
public class BoardRepositoryTest {

    @Autowired
    private MainBoardRepository mainBoardRepository;

    @Test
    void test_1() {
        MainBoard q1 = new MainBoard();
        q1.setHead("백종원의 레서피");
        q1.setBody("참치김치찌개");
        q1.setCreatTime(LocalDateTime.now());
        this.mainBoardRepository.save(q1);
    }
}
