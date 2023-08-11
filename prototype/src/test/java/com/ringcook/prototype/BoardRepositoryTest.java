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
        q1.setSubject("백종원의 레서피");
        q1.setContent("참치김치찌개");
        q1.setCreatetime(LocalDateTime.now());
        this.mainBoardRepository.save(q1);
    }


}
