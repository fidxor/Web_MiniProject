package com.lincook.backend.controller.dto;

import com.lincook.backend.Entity.Authority;
import com.lincook.backend.Entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberRequestDto {

    private String userid;
    private String password;

    public Member toMember(PasswordEncoder passwordEncoder)
    {
        return Member.builder()
                .userid(userid)
                .password(passwordEncoder.encode(password))
                .authority(Authority.ROLE_USER)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication()
    {
        return new UsernamePasswordAuthenticationToken(userid, password);
    }
}
