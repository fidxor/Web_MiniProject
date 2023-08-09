package com.ringcook.prototype;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
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
}
