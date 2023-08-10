package com.ringcook.prototype;

import com.ringcook.prototype.user.SignUpRepository;
import com.ringcook.prototype.user.user_info;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private SignUpRepository signUpRepository;

    @Test
    void testJpa_1()
    {
        user_info user = new user_info();
        user.setId("user3");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPw(passwordEncoder.encode("user3user3"));
        user.setAddress("서울시 금천구");
        this.signUpRepository.save(user);
    }

}
