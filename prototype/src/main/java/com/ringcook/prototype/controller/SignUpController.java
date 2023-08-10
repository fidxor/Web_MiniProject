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

        user.setU_id(map.get("id"));
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setU_pw(passwordEncoder.encode(map.get("pw")));
        user.setU_local(map.get("local"));
        signUpRepository.save(user);
    }

    @GetMapping("/login")
    public String login() {
        return "login_form";
    }
}


