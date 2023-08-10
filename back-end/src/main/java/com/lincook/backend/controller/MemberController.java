package com.lincook.backend.controller;

import com.lincook.backend.Service.MemberService;
import com.lincook.backend.controller.dto.MemberResponseDto;
import com.lincook.backend.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/me")
    public ResponseEntity<MemberResponseDto> findMemberInfoById()
    {
        return ResponseEntity.ok(memberService.findMemberInfoById(SecurityUtil.getCurrentMemberId()));
    }

    @GetMapping("/{userid}")
    public ResponseEntity<MemberResponseDto> findMemberInfoByUserId(@PathVariable String userid)
    {
        return ResponseEntity.ok(memberService.findMemberInfoByUserId(userid));
    }
}
