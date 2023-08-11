package com.ringcook.prototype.controller;

import com.ringcook.prototype.user.SignUpRepository;
import com.ringcook.prototype.user.user_info;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class UserService {

    private final SignUpRepository signUpRepository;

    public UserService(SignUpRepository signUpRepository) {
        this.signUpRepository = signUpRepository;
    }

    public user_info creat(String userid, String password, String userlocal) {
        user_info user = new user_info();
        user.setId(userid);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPw(passwordEncoder.encode(password));
        user.setAddress(userlocal);
        this.signUpRepository.save(user);
        return user;
    }

    @GetMapping("/login")
    public String login() {
        return "login_form";
    }
}
