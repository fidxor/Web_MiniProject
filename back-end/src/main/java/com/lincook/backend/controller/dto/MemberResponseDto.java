package com.lincook.backend.controller.dto;

import com.lincook.backend.Entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {

    private String userid;

    public static MemberResponseDto of(Member member)
    {
        return new MemberResponseDto(member.getUserid());
    }
}
