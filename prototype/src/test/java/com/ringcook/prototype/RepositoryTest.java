package com.ringcook.prototype;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
public class RepositoryTest {

    @Autowired
    private SignUpRepository signUpRepository;

    @Test
    void testJpa_1()
    {
        user_info user = new user_info();
        user.setU_id("user1");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setU_pw(passwordEncoder.encode("user2user2"));
        user.setU_local("서울시 강북구");
        this.signUpRepository.save(user);
    }
}
