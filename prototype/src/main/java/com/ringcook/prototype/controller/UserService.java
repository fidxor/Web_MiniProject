package com.ringcook.prototype.controller;

import com.ringcook.prototype.user.SignUpRepository;
import com.ringcook.prototype.user.user_info;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final SignUpRepository signUpRepository;

    public UserService(SignUpRepository signUpRepository) {
        this.signUpRepository = signUpRepository;
    }

    public SignUp creat(String username, String password) {
        user_info user = new user_info();
        user.setU_id(userid);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setU_pw(passwordEncoder.encode(userpw);
        user.setU_local(userlocal);
        signUpRepository.save(user);
    }
}
