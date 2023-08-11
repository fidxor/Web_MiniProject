package com.ringcook.prototype.controller;

import com.ringcook.prototype.user.SignUpRepository;
import com.ringcook.prototype.user.user_info;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class SignUpController {

    private final SignUpRepository signUpRepository;

    public void signUp(@RequestBody Map<String, String> map)
    {
        user_info user = new user_info();

        user.setId(map.get("id"));
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPw(passwordEncoder.encode(map.get("pw")));
        user.setAddress(map.get("local"));
        signUpRepository.save(user);
    }
}


