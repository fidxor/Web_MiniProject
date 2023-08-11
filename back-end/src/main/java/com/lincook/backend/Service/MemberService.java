package com.lincook.backend.Service;

import com.lincook.backend.Repository.MemberRepository;
import com.lincook.backend.controller.dto.MemberResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberResponseDto findMemberInfoById(Long memberId)
    {
        return memberRepository.findById(memberId)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다."));
    }

    public MemberResponseDto findMemberInfoByUserId(String userid)
    {
        return memberRepository.findByUserid(userid)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));
    }
}
